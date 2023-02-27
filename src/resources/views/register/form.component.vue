<template>

  <div class="row align-items-center h-100">
    <div class="col-sm-6 mx-auto">

      <div class="card card-user">
        <div class="card-header py-3">
          <h5 class="card-title my-0 font-weight-bolder">Welcome Back! </h5>
          <small class="card-title text-secondary">{{ $route.meta.title }} </small>
        </div>
        <div class="card-body">
          <form @submit.prevent="submit$">
              <div class="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" v-model="data.displayName" class="form-control"
                         aria-describedby="emailHelp"
                         placeholder="Enter firstname" required>

              </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" v-model="data.email" class="form-control" id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     placeholder="Enter name" required>

            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" v-model="data.password" class="form-control" id="exampleInputPassword1"
                     placeholder="Enter password" required>
            </div>
            <div class="form-group" v-if="error.message">
              <div class="alert alert-danger" role="alert">
                {{ error.message }}
              </div>
            </div>
              <div class="form-group " >
                  <button type="submit" class="btn btn-primary btn-block ">  <i class="fas fa-user-plus"></i> Register </button>
              </div>
              <div class="form-group" >
                  <a @click="google$" class="btn btn-light btn-block text-uppercase btn-outline border " href="#"><i class="fa-brands fa-google"></i> Continue with Google</a>
              </div>
          </form>


        </div>
          <div class="card-footer text-center py-3 text-muted">
              Take me to the <router-link :to="{name: 'login'}" tag="a">login</router-link> page
          </div>
      </div>

    </div>
  </div>

</template>

<script src="./form.component.js"></script>

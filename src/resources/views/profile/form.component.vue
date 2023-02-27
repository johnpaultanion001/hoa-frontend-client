<template>
    <div class="row">
        <div class="col-lg-12 text-center">
            <p class="h2 py-4 my-0">Profile</p>
        </div>

        <div class="col-lg-12">
            <form @submit.prevent="update$()">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <input type="text" class="form-control" required v-model="data.first_name" placeholder="Firstname*"  />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <input type="text" class="form-control"  v-model="data.middle_name" placeholder="Middlename"  />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <input type="text" class="form-control" required v-model="data.last_name" placeholder="Lastname*"  />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <input type="text" class="form-control"  v-model="data.gender" placeholder="Gender"  />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <input type="date" class="form-control"  v-model="data.birthdate" placeholder="Birthdate"  />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <input type="text" class="form-control"  v-model="data.address" placeholder="Address"  />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 pr-1">
                        <button type="submit" class="btn btn-primary btn-block">Send</button>
                    </div>
                    <div class="col-6 pl-1">
                        <button type="button" @click="$router.go(-1)" class="btn btn-danger btn-block">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>


<script src="./form.component.js"></script>

<template>


    <div class="row">
        <div class="col-lg-12 text-center">
            <p class="h2 py-4 my-0">Bills / Utilities</p>
        </div>

        <div class="col-sm-6 py-3 col-md-6 col-lg-4 text-center cursor-pointer" v-for="(value,key) in data">
            <div class="card action">
                <div class="card-body ">
                    <i :class="value.icon" class="fa-4x"></i>
<!--                    <i class="fa faa-admi"></i>-->
                </div>
                <div class="card-footer  bg-transparent  lead">{{ value.name }}</div>
            </div>
        </div>
    </div>

</template>

<script src="./list.component.js"></script>

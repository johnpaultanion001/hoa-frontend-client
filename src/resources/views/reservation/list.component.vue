<template>


    <div class="row">
        <div class="col-lg-12 text-center">
            <p class="h2 py-4 my-0">List of Amenities</p>
        </div>


        <div class="col-sm-6 py-3 col-md-6 col-lg-4 text-center cursor-pointer" v-for="(value,key) in data">
            <div class="card ">
                <img class="card-img-top"
                     :src="value.file_cover ? value.file_cover.full_url :'./images/amenities-placeholder.png'"
                     alt="Card image cap">
                <div class="card-body lead ">
                    {{ value.name }}
                </div>
                <div class="card-footer  bg-transparent ">
                    <div class="row">
                        <div class="col-lg-12 py-2 col-md-12 col-xl-6">
                            <button @click="$bvModal.show('form'),$refs.form.reset(value)" type="button" class="btn btn-primary btn-block">New
                                Booking
                            </button>
                        </div>
                        <div class="col-lg-12 py-2 col-md-12 col-xl-6">
                            <button  @click="show(value,'show')" type="button" class="btn btn-info btn-block">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <form-component ref="form"/>
        <show-component :datum="datum"/>
    </div>

</template>

<script src="./list.component.js"></script>

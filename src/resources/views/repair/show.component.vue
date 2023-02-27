<template>

    <div >
        <b-modal size="lg" id="show" centered hide-footer>
            <template #modal-title>

            </template>
            <div class="row">

                <div class="col-lg-12">    <img :src="datum.file_cover ? datum.file_cover.full_url : './images/amenities-placeholder.png'" class="img-fluid" alt="Responsive image"></div>
                <div class="col-lg-12 mt-3">{{ datum.name}}</div>

            </div>
            <div class="row mt-3">


                <div class="col-lg-12">
                    <b-button  block @click="$bvModal.hide('show')">Close</b-button>
                </div>
            </div>
        </b-modal>

    </div>
</template>

<script src="./show.component.js"></script>
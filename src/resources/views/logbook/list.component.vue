<template>


    <div class="row">
        <div class="col-lg-12 text-center">
            <p class="h2 py-4 my-0">Visitor Logbook</p>
        </div>

        <div class="col-lg-12 ">

            <div class="row">
                <div class="col-lg-10  col-12 mb-3">
                    <div class="input-group 3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-search"></i></span></div>
                        <input type="search" @keyup="search$({name: $event.target.value})" class="form-control" placeholder="Search for names..">
                    </div>
                </div>
                <div class="col-lg-2 col-12 mb-3">
                    <button class="btn btn-primary btn-block" @click="$bvModal.show('form')" type="button"><i class="fa fa-plus"></i> New</button>
                </div>
            </div>
        </div>
        <div class="col-lg-12 table-responsive">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Person to Visit</th>
                    <th scope="col">Date / Time</th>
                    <th scope="col" class="text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(value,key) in data.data">
                    <td>{{value.name}}</td>
                    <td>{{value.contact_number}}</td>
                    <td>{{value.person_to_visit}}</td>
                    <td>{{value.date}} {{$formatTime(value.time)}}</td>
                    <td class="text-center"><a href="javascript:void(0);"  @click="$refs.show.show(value)" class="text text-primary">View</a></td>
                </tr>



                </tbody>
            </table>

        </div>
        <div class="col-lg-12">
            <paginate-component
                v-if="$toPageCount(data.total, data.per_page ) > 1"
                :page_count="$toPageCount(data.total, data.per_page )"
                @event="search$"/>
        </div>

        <form-component @event="search$" />
        <show-component ref="show"/>
    </div>

</template>

<script src="./list.component.js"></script>

<template>
    <div class="row">
        <div class="col-lg-12 text-center">
            <p class="h2 py-4 my-0">Document Records</p>
        </div>

        <div class="col-lg-12">
            <div class="row">
                <div class="col-sm-10">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-calendar"></i></span>
                        </div>
                        <input type="date" class="form-control" placeholder="Search for dates.." v-model="filter.data" @change="list_documents(filter)" />
                    </div>
                </div>
                <div class="col-sm-2">
                    <button type="button" class="btn btn-primary btn-block" @click="$bvModal.show('form')"><i class="fa fa-plus"></i> New</button>
                </div>
            </div>
        </div>
        <div class="col-lg-12">
            <ul class="nav nav-pills nav-fill font-weight-bold lead">
                <li class="nav-item border-right-2 border-top border-left rounded-0 w-50">
                    <a :class="{ 'active ': config.active_tab == 1, ' text-dark': config.active_tab == 2 }" @click="(config.active_tab = 1), list_documents(filter)" class="nav-link rounded-0" href="#">Request of Documents</a>
                </li>
                <li class="nav-item border-top border-right w-50">
                    <a :class="{ active: config.active_tab == 2, ' text-dark': config.active_tab == 1 }" @click="config.active_tab = 2" class="nav-link rounded-0" href="#">Transaction History</a>
                </li>
            </ul>
        </div>
        <div class="col-lg-12 table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date Uploaded</th>
                        <th class="text-center">Document</th>
                        <th class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, key) in documents" :key="key">
                        <td>{{ value.id }}</td>
                        <td>{{ value.title }}</td>
                        <td>{{ value.description }}</td>
                        <td>
                            <template v-if="value.file_document">
                                {{ $formatDate(value.file_document.created_at) }}
                                {{ $formatTime(value.file_document.created_at) }}
                            </template>
                        </td>
                        <td class="text-center">
                            <template v-if="value.file_document"> <a href="javascript:;" @click="download(value.file_document.full_url)" class="text-info">DOWNLOAD</a> </template>
                        </td>

                        <td class="text-center">
                            <a href="javascript:;" @click="delete$(value.id)" class="text text-danger px-1">DELETE</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <form-component ref="form" @event="list_documents" />
    </div>
</template>

<script src="./list.component.js"></script>

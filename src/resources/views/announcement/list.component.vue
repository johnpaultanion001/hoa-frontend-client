<template>
    <div class="row">
        <div class="col-lg-12 text-center">
            <p class="h2 py-4 my-0">Events and Announcements</p>
        </div>

        <div class="col-lg-12 table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Posted Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="cursor-pointer" :class="{ 'table-active': !$isOdd(key) }" v-for="(value, key) in data" :key="key" @click="$refs.show.show(value.body)">
                        <th scope="row">{{ value.id }}</th>
                        <td>{{ value.title }}</td>
                        <td>{{ value.description }}</td>
                        <td>{{ $formatDate(value.data) }} {{ $formatTime(value.time) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <show-component ref="show"></show-component>
    </div>
</template>

<script src="./list.component.js"></script>

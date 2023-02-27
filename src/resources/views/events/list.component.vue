<template>


    <div class="row">
        <div class="col-lg-12 text-center">
            <p class="h2 py-4 my-0">Events</p>
        </div>


        <div class="col-lg-12">
            <full-calendar
                ref="fullCalendar"
                :options='calendar_option'
            >

            </full-calendar>
        </div>
    </div>

</template>

<script src="./list.component.js"></script>

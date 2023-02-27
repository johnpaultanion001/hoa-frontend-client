<template>
    <div>
        <b-modal size="lg" id="form" centered hide-footer hide-header-close>
            <template #modal-title> {{ service.name }} {{ config.step == 3 ? " -  Confirmation" : "" }} </template>
            <template v-if="config.step == 1">
                <div class="row">
                    <div class="col-lg-12">
                        <calendar-booking-component v-if="service.id" ref="calendar" @set_date="set_booking_date" @search="init_events" />
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-sm-6">
                        <button type="button" class="btn btn-danger btn-block" @click="$bvModal.hide('form'), (config.step = 1)">Close</button>
                    </div>
                    <div class="col-sm-6">
                        <button type="button" class="btn btn-primary btn-block" @click="config.step = 2" :disabled="!data.booking_details.length">Next</button>
                    </div>
                </div>
            </template>

            <template v-if="[2, 3].includes(config.step)">
                <form @submit.prevent="config.step == 2 ? control(3) : store()">
                    <div class="row" v-for="(value, key) in data.booking_details" :key="key">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Date</label><span class="text-danger">*</span>
                                <input v-model="value.date" type="text" class="form-control" required disabled :class="{ 'bg-white': config.step == 2 }" readonly />
                                <!-- <small v-if="$toError(error.errors, 'date').status" class="text-danger">{{ $toError(error.errors, "date").message }}</small> -->
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Time</label><span class="text-danger">*</span>
                                <v-select :disabled="config.step == 3" class="calendar" multiple :options="set_time_slots(value.date)" label="name" v-model="value.time">
                                    <template #search="{ attributes, events }">
                                        <input class="vs__search" :required="!value.time.length" v-bind="attributes" v-on="events" />
                                    </template>
                                </v-select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label>Remarks</label>
                                <textarea v-model="data.notes" class="form-control" :disabled="config.step == 3" :class="{ 'border-danger': $toError(error.errors, 'notes').status }"> </textarea>
                                <small v-if="$toError(error.errors, 'notes').status" class="text-danger">{{ $toError(error.errors, "notes").message }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-lg-12 py-2 col-md-12 col-xl-6">
                            <b-button block @click="control(config.step == 3 ? 2 : 1), reset(service)">Back</b-button>
                        </div>
                        <div class="col-lg-12 py-2 col-md-12 col-xl-6">
                            <button type="submit" class="btn btn-primary btn-block">{{ config.step == 2 ? "Next" : "Confirm" }}</button>
                        </div>
                    </div>
                </form>
            </template>
            <template v-if="[4].includes(config.step)">
                <div class="row">
                    <div class="col-lg-12 h4">Booking Success</div>

                    <div class="col-lg-12 h5">Status: <span class="font-weight-normal">Pending</span></div>
                    <div class="col-lg-12">Your schedule is being process by our admin an email will be sent to you once we have an update regarding your maintenance service.</div>
                </div>
                <div class="row mt-3">
                    <div class="col-lg-12">
                        <b-button block @click="control(1), $bvModal.hide('form')">Close</b-button>
                    </div>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script src="./form.component.js"></script>

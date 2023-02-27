import { statuses } from "../../../shared/mockup/statuses.mockup";
import { filter } from "../../../shared/mockup/filter.mockup";
import { alertService } from "../../../services/alert/alert.service";
import { bookingService } from "../../../services/booking/booking.service";
import { serviceService } from "../../../services/service/service.service";
import CalendarBookingComponent from "../../components/calendar-booking.component.vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
    components: { CalendarBookingComponent, vSelect },
    data() {
        return {
            service: {},
            config: {
                step: 1,
            },
            data: {
                personal_details: {},
                contact_details: {},
                address_details: {},
                type: filter.service_type.reservation_booking,
                status_id: statuses[0].id,
                booking_details: [],
                date_available: [],
            },
            error: {},
        };
    },
    mounted() {},
    methods: {
        async init_events(data) {
            let filter = {};

            if (this.service.availability == "days") {
                filter = data;
            }
            this.date_available = await serviceService.availabilities(this.service.id, filter).then((response) => response.data);

            this.date_available.forEach(async (value, key) => {
                if (new Date(value.date) >= new Date()) {
                    await this.$refs.calendar.set_availability(value.date);
                    if (!value.available) {
                        await this.$refs.calendar.set_fully_booked(value.date);
                    }
                }
            });
        },

        set_time_slots(date) {
            let slots = [];
            let result = this.date_available.find((el) => el.date == date);
            if (result) {
                result.time_slots.forEach((value, key) => {
                    if (value.available) {
                        let input = {
                            name: `${this.$formatTime(value.from)} - ${this.$formatTime(value.to)}`,
                            time_from: `${value.from}:00`,
                            time_to: `${value.to}:00`,
                        };
                        slots.push(input);
                    }
                });
            }
            return slots;
        },
        async control(step) {
            this.config.step = step;
        },
        async store() {
            var callback = async () => {
                await bookingService
                    .store({ ...this.data, service_id: this.service.id })
                    .then(() => {
                        this.error = {};
                        alertService.success("success", "success");

                        this.data = {
                            personal_details: {},
                            contact_details: {},
                            address_details: {},
                            type: filter.service_type.reservation_booking,
                            status_id: statuses[0].id,
                            booking_details: [],
                        };
                        this.config.step = 4;
                    })
                    .catch((response) => {
                        this.error = response;
                    });
            };
            alertService.confirmation(callback, "Confirmation", "Are you sure?");
        },
        set_booking_date(date) {
            let idx = this.data.booking_details.findIndex((el) => el.date == date);
            if (idx >= 0) {
                this.data.booking_details.splice(idx, 1);
            } else {
                this.data.booking_details.push({
                    date: date,
                    time: [],
                });
            }
        },
        async reset(service) {
            await this.control(1);
            this.service = service;
            this.data.booking_details = [];
            setTimeout(async () => {
                await this.$refs.calendar.reset();
            }, 50);
        },
    },
};

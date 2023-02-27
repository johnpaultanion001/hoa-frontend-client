import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

export default {

    components: {FullCalendar},
    data() {
        return {
            calendar_option: {
                plugins: [
                    dayGridPlugin,
                    timeGridPlugin,
                    listPlugin,
                    interactionPlugin, // needed for dateClick
                ],
                headerToolbar: {
                    left: ((window.innerWidth <= 768) ? null : 'prev,today,next'),
                    center: 'title',
                    right: ((window.innerWidth <= 768) ? null : 'timeGridDay,timeGridWeek,dayGridMonth')
                },
                footerToolbar: {
                    center: ((window.innerWidth >= 768) ? null : 'timeGridDay,timeGridWeek,dayGridMonth')
                },
                buttonText: {
                    today: 'Today',
                    month: 'Monthly',
                    week: 'Weekly',
                    day: 'Daily',
                    listDay: 'Daily',
                    listWeek: 'Weekly',
                    listMonth: 'Monthly'
                },
                dayMaxEvents: true,
                weekends: true,
                eventsSet: this.event_set,

            },

        }
    },
    mounted() {

    },
    methods: {

        async event_set($event) {
            this.full_calendar = this.$refs.fullCalendar.getApi();

            setTimeout(() => this.full_calendar.render(), 1);

        }
    }
}

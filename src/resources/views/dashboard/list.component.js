import {dashboard} from "../../../shared/mockup/dashboard.mockup";
import { eventAnnouncementService } from "../../../services/event-announcement/event-announcement.service";
import { userSettingService } from "../../../services/user-setting/user-setting.service";
import { surveyService } from "../../../services/survey/survey.service";
import ShowEventAnnouncement from "../announcement/show.component.vue";
import PaginateComponent from "../../components/paginate.component";
import SurveyComponent from "../../views/dashboard/survey.component.vue";

export default {
    components: {ShowEventAnnouncement, PaginateComponent, SurveyComponent},
    data() {
        return {
            data: dashboard,
            events_announcements: {
                total: 1,
                per_page: 3,
                data: [],
                surveys: [],
            },
            filter: {paginate: 1, per_page: 3, page: 1},
            surveys: []
        };
    },
    async mounted() {
        await this.init_user_settings();
        await this.init_events_announcements(this.filter);
        await this.init_surveys();
    },
    methods: {
        async init_events_announcements(query) {
            let response = await eventAnnouncementService.list(query);
            this.events_announcements = response.data;
        },

        async init_surveys() {
            const response = await surveyService.list();
            this.surveys = response.data;
        },

       async search$(data) {
            await this.init_events_announcements({...this.filter, ...data});
        },

        async init_user_settings() {
            let result = await userSettingService.list({paginate: 0, keys: "page", status: 1});
            console.log(result.data);
            this.data = result.data;
        },
    },
};

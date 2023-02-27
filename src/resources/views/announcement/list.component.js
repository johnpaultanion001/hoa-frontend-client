import { eventAnnouncementService } from "../../../services/event-announcement/event-announcement.service";
import ShowComponent from "./show.component.vue";
export default {
    components: { ShowComponent },
    data() {
        return {
            data: [],
            filter: { paginate: 0 },
        };
    },
    async mounted() {
        await this.list(this.filter);
    },
    methods: {
        async list(query) {
            let response = await eventAnnouncementService.list(query);
            this.data = response.data;
        },
    },
};

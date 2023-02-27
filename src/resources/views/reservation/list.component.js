
import {filter} from "../../../shared/mockup/filter.mockup";

import FormComponent from "./form.component.vue";
import ShowComponent from "./show.component.vue";
import {serviceService} from "../../../services/service/service.service";

export default {

    components: {FormComponent, ShowComponent},
    data() {
        return {
            data: [],
            filter: {
                per_page: 0,
                paginate: 0,
                type: filter.service_type.reservation_booking,
            },
            datum: {}
        }
    },
    async mounted() {
        await this.list(this.filter);
    },
    methods: {

        async list(query) {
            const response = await serviceService.list(query);
            this.data = response.data;

        },
        async show(datum,modal) {
            this.datum = datum;
            await this.$bvModal.show(modal);
        }
    }
}

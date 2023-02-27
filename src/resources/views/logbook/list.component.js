import PaginateComponent from "../../components/paginate.component";
import FormComponent from "./form.component.vue";
import {visitorLogService} from "../../../services/visitor-log/visitor-log.service";
import _ from 'lodash';
import ShowComponent from "./show.component.vue";
export default {
    components: {PaginateComponent,FormComponent,ShowComponent},
    data() {
        return {
            data: {
                total: 1,
                per_page: 10
            },
            filter: {
                per_page: 10,
                paginate: 1
            }
        }
    },
    async mounted(){



        await this.list(this.filter);
    },
    methods: {

        async list(query) {

            const response = await visitorLogService.list(query);
            this.data = response.data;
        },
        search$: _.debounce(async function (data) {

            await this.list({...this.filter, ...data});
        }, 500),
    }
}

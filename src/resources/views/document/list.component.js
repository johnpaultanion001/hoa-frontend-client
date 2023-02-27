import { documentService } from "../../../services/documents/document.service";
import { saveAs } from "file-saver";
import axios from "axios";
import FormComponent from "./form.component.vue";
export default {
    components: { FormComponent },
    data() {
        return {
            data: [],
            config: {
                active_tab: 1,
            },
            filter: {
                paginate: 0,
            },
            documents: [],
        };
    },

    async mounted() {
        this.config.active_tab = this.$route.query.module ? this.$route.query.module : 1;
        if (this.config.active_tab == 1) {
            await this.list_documents(this.filter);
        } else {
        }
    },
    methods: {
        async list_documents(query) {
            let response = await documentService.list(query);
            this.documents = response.data;
            console.log(this.documents);
        },
        async download(url) {
            const file_name = url.split("/").slice(-1)[0];
            axios.get(url, { responseType: "blob" }).then((response) => {
                saveAs(response.data, file_name);
            });
        },
    },
};

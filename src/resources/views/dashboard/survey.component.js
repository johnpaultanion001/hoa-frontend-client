import { alertService } from "@/services/alert/alert.service";
import { userSettingService } from "../../../services/user-setting/user-setting.service";
import { responseService } from "@/services/response/response.service";

export default {
    props: {
        survey: {
            type: Object,
            required: true
        },
    },
    data: () => {
        return {
            showModal: true,
            data: {
                answers: [],
            },
            config: {},
            error: {},
        };
    },
    
    async mounted() {

    },
    
    methods: {
        combobox($event) {

        },

        submit$() {
            this.data.survey = this.survey;
            var callback = async () => {
                if (this.data.role == "company") {
                    let result = await userSettingService.list({ client: this.data.user_setting_company.value.client, paginate: 0 });
                    let exist = result.data.length > 0 ? true : false;
                    this.config.user_setting_company_exist = exist;
                    if (exist) {
                        return;
                    }
                }

                await responseService
                .store(this.data)
                .then(async (result) => {
                    this.error = {};                   
                    alertService.success("success", "success");
                    this.showModal = false;
                })
                .catch((response) => {
                    this.error = response;
                    result = result.data;
                });
            }

            alertService.confirmation(callback, "Confirmation", "submit your response?");
        }
    }
}
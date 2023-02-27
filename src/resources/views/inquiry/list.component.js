import { alertService } from "@/services/alert/alert.service";
import { inquiryService } from "@/services/inquiry/inquiry.service";

export default {
    data: () => {
        return {
            data: {},
            error: {},
            config: {},
        };
    },
    async mounted() {},
    methods: {
        async store$() {
            var callback = async () => {
                await inquiryService
                    .store(this.data)
                    .then(() => {
                        this.error = {};
                        alertService.success("success", "success");
                        this.data = {};
                    })
                    .catch((response) => {
                        this.error = response;
                    });
            };
            alertService.confirmation(callback, "Confirmation", "Are you sure?");
        },
    },
};

import {userDetailService} from "../../../services/user-detail/user-detail.service";
import {alertService} from "../../../services/alert/alert.service";

export default {
    data(){

        return {
            data: {}
        }
    },
    async mounted() {


        await this.show(0);
    },
    methods: {


        async update$(){
            var callback = async () => {
                await userDetailService
                    .update(this.data.id,this.data)
                    .then(async () => {
                        this.error = {};
                        alertService.success("success", "success");
                        await this.show(0);
                    })
                    .catch((response) => {
                        this.error = response;
                    });
            };
            alertService.confirmation(callback, "Confirmation", "Are you sure?");
        },
        async show(id){

            let response = await userDetailService.show(id);

            this.data = response.data;
        }
    }

}

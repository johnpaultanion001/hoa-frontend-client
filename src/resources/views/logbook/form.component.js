import {visitorLogService} from "../../../services/visitor-log/visitor-log.service";
import {alertService} from "../../../services/alert/alert.service";
import {fileService} from "../../../services/file/file.service";


export default {
    data() {
        return {
            data: {
                file_identification: {}
            },
            error: {}
        }
    },
    mounted() {


    },
    methods: {
        async upload($event,data,key) {

            await fileService.upload($event.target.files[0], {directory: "identifications"}).then((success) => {
                this.data[key] = { ...this.data[key],...success.data, ...data};
            });
        },
        async store(){
            var callback = async () => {
                await visitorLogService.store(this.data)
                    .then(async (success) => {
                        await fileService.store({...this.data.file_identification, table_type: "visitor_logs", table_id: success.data.id});

                        this.error = {};
                        alertService.success('success', 'success');
                        this.data = {
                            file_identification: {}
                        };
                        this.$emit('event',{});
                    })
                    .catch((response) => {
                        this.error = response;
                    });
            }
            alertService.confirmation(callback, 'Text', 'Description');
        }
    }
}

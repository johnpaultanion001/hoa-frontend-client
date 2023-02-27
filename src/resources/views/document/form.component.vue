<template>
    <div>
        <b-modal size="lg" id="form" centered hide-footer>
            <template #modal-title>Request Documents </template>

            <form @submit.prevent="store$()">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" class="form-control" required v-model="data.title" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Description</label>
                            <textarea class="form-control" required v-model="data.description" />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary btn-block">Request</button>
                    </div>
                </div>
            </form>
        </b-modal>
    </div>
</template>
<script>
import { documentService } from "../../../services/documents/document.service";
import { alertService } from "../../../services/alert/alert.service";
export default {
    data() {
        return {
            data: {},
        };
    },
    methods: {
        async store$() {
            var callback = async () => {
                await documentService
                    .store(this.data)
                    .then(async (success) => {
                        this.error = {};
                        alertService.success("success", "success");

                        this.data = {};
                        this.$emit("event", { paginate: 0 });
                    })
                    .catch((response) => {
                        this.error = response;
                    });
            };
            alertService.confirmation(callback, "Confirmation", "Are you sure?");
        },
    },
};
</script>

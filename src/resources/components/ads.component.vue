<template>
    <b-modal size="lg" id="ads" centered hide-footer hide-header hide-backdrop hide-header-close>
        <div class="row">
            <div class="col-lg-12">
                <a v-if="data.file_cover.full_url" @click="init_timer" href="javascript:;" class="text-white" style="position: absolute; right: 4px; top: -10px"><i class="fa fa-times-circle fa-2x" aria-hidden="true"></i></a>
                <img @click="redirect(data.link)" :src="data.file_cover.full_url" class="img-fluid cursor-pointer" />
            </div>
        </div>
    </b-modal>
</template>

<style>
#ads___BV_modal_body_ {
    padding: 0 !important;
}
</style>
<script>
import { advertisementService } from "../../services/advertisement/advertisment.service";
export default {
    data: () => {
        return {
            data: {
                file_cover: {},
            },
            config: {
                show: 1,
            },
            idle_timeout: 1800,
            idle_seconds_timer: 0,
            idle_seconds_couter: 0,
        };
    },
    async mounted() {
        await this.init_timer();
    },
    methods: {
        async init_timer() {
            let count = this.$storage.get("ads");
            if (!count) {
                count = 0;
                this.$storage.set("ads", count);
            }
            this.idle_seconds_couter = count;

            await this.$bvModal.hide("ads");

            this.idle_seconds_timer = setInterval(this.check_idle_time, 1000);
        },
        async check_idle_time() {
            this.idle_seconds_couter++;
            this.$storage.set("ads", this.idle_seconds_couter);
            if (this.idle_seconds_couter >= this.idle_timeout) {
                await this.init_ads();

                this.$storage.set("ads", 0);
                clearInterval(this.idle_seconds_timer);
            }
        },
        async init_ads() {
            let response = await advertisementService.show(0);
            this.data = response.data;
            await this.$bvModal.show("ads");
        },
        redirect(link) {
            window.open(link, "_blank").focus();
        },
    },
    watch: {
        $route(to, from) {
            console.log(to);
        },
    },
};
</script>

<template>
    <div>
        <b-modal size="lg" id="show" centered hide-footer>
            <template #modal-title> </template>
            <div class="row">
                <div class="col-lg-12" v-html="data"></div>
            </div>
        </b-modal>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: "",
        };
    },
    methods: {
        async show(data) {
            this.data = data;
            this.$bvModal.show("show");
        },
    },
};
</script>

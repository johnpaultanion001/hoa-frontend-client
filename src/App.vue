<template>
    <div id="app">
        <router-view />
        <ads ref="ads" />
    </div>
</template>

<style>
@import "./resources/assets/css/styles.css";
</style>
<script>
import Ads from "./resources/components/ads.component.vue";
export default {
    components: { Ads },
    mounted() {},
};
</script>

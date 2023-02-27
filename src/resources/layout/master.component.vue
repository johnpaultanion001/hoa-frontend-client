<template>

    <div class="h-100 ">
        <navbar-component/>
        <banner-component v-if="$route.meta.name != 'profile'"/>


        <router-view/>
        <footer-component/>

    </div>
</template>
<style>

</style>
<script>
import NavbarComponent from "../components/navbar.component";
import FooterComponent from "../components/footer.component";
import BannerComponent from "../components/banner.component";

export default {
    components: {
        NavbarComponent,
        FooterComponent,
        BannerComponent
    },
    mounted() {

    }
}
</script>

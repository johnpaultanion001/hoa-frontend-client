import Vue from "vue";
import { Vue2Storage } from "vue2-storage";
import App from "./App.vue";
import router from "./router";
import AppMixin from "./app.mixin";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap";
import "./resources/assets/js/main";
import config from "./config/app.config";
import { firebase } from "./globals/firebase";
import VueFbCustomerChat from "vue-fb-customer-chat";

Vue.use(VueFbCustomerChat, {
    page_id: config.fb_page_id, //  change 'null' to your Facebook Page ID,
    theme_color: "#333333", // theme color in HEX
    locale: "en_US", // default 'en_US'
});

Vue.config.productionTip = false;

Vue.mixin(AppMixin);
Vue.use(Vue2Storage);
Vue.use(BootstrapVue);
firebase.initializeApp(config.firebaseConfig);

new Vue({
    router,
    render: function (h) {
        return h(App);
    },
}).$mount("#app");

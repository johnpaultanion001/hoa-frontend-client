import {alertService} from "@/services/alert/alert.service";
import {firebaseService} from "@/services/firebase/firebase.service";
import Vue from "vue";
import {default as auth} from "../../../shared/map/auth.map";
import {authService} from "../../../services/auth/auth.service";
import {authorized} from "../../../shared/mockup/authorized.mockup";

export default {
    data: () => {
        return {
            data: {},
            error: {},
            config: {},
        }
    },
    async mounted() {


    },
    methods: {


        async submit$() {

            await firebaseService.register(this.data).then(async (response) => {

                await firebaseService.update(this.data);
                var cb = async () => {
                   await this.handle_success(response)
                }

                alertService.confirmation(cb,'Success','Do you want to login?','success');
                this.data = {};
            }).catch((response) => {
                    this.error = response;


            })
        },

        async google$() {
            await firebaseService.google().then((response) => this.handle_success(response));
        },

        async handle_success(response) {


            let input = {}
            auth.forEach((value, key) => {
                input[value.to] = response.user[value.from];
            })
            Vue.$storage.set('auth', input);
            await authService.profile().then(async (success) => {
                await authService.authorized({allowed: authorized.allowed}).then(async (success) => {
                    this.$router.push({name: 'dashboard.index'}).then(() => alertService.close());
                }).catch((error) => {
                    this.error = {
                        message: "Invalid Credential."
                    };
                    this.$storage.remove('auth');
                })
            });

        }
    },


}

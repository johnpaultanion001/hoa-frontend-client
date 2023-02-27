import { alertService } from "@/services/alert/alert.service";
import { firebaseService } from "@/services/firebase/firebase.service";
import { default as auth } from "../../../shared/map/auth.map";
import { authService } from "../../../services/auth/auth.service";
import { authorized } from "../../../shared/mockup/authorized.mockup";
import { userDetailService } from "../../../services/user-detail/user-detail.service";
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
        async login$() {
            await alertService.loading();

            await firebaseService
                .login(this.data)
                .then((response) => this.handle_success(response))
                .catch((response) => {
                    this.error = {
                        message: "Invalid Credential.",
                    };
                    this.data = {};
                    alertService.close();
                });
        },

        async google$() {
            await firebaseService.google().then((response) => this.handle_success(response));
        },

        async handle_success(response) {
            let input = {};
            auth.forEach((value, key) => {
                input[value.to] = response.user[value.from];
            });

            this.$storage.set("auth", input);
            await authService.profile().then(async (success) => {
                await authService
                    .authorized({ allowed: authorized.allowed })
                    .then(async (success) => {
                        await userDetailService.store({});
                        this.$router.push({ name: "dashboard.index" }).then(async () => {
                            alertService.close();
                            await this.$parent.$parent.$parent.$refs.ads.init_ads();
                        });
                    })
                    .catch((error) => {
                        this.error = {
                            message: "Invalid Credential.",
                        };
                        this.$storage.remove("auth");
                    });
            });
        },
    },
};

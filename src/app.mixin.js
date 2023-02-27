import moment from "moment";

export default {
    methods: {
        $label(id, type) {
            const label = {
                form_submit: id ? "UPDATE" : "CREATE",
            };
            return label[type];
        },
        $toError(errors, key) {
            var response = {
                status: false,
                message: "",
            };
            if (errors && errors[key]) {
                response = {
                    status: true,
                    message: errors[key][0],
                };
            }
            return response;
        },
        $toPageCount(total, per_page) {
            var total = total / per_page;

            return Math.ceil(total);
        },
        camelToUnderscore(key) {
            var result = key.replace(/([A-Z])/g, " $1");
            return result.split(" ").join("_").toLowerCase();
        },
        $formatTime(time) {
            return moment(time, ["HH:mm"]).format("hh:mm A");
        },
        $formatDate(date) {
            return moment(date).format("yyyy-MM-DD");
        },
        $isOdd(number) {
            console.log(number % 2);
            return number % 2;
        },
        $uid() {
            return Date.now().toString(36) + Math.random().toString(36).substr(2);
        },
    },
};

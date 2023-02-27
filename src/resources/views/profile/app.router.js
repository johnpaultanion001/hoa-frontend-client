const config = { prefix: "/profile", name: "profile" };
export default [
    {
        path: config.prefix,
        name: `${config.name}.index`,
        component: () => import("./form.component.vue"),
        meta: {
            title: "",
            name: "profile"
        },
    },
];

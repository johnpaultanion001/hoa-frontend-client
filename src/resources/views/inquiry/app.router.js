const config = { prefix: "/inquiries", name: "inquiry" };
export default [
    {
        path: config.prefix,
        name: `${config.name}.index`,
        component: () => import("./list.component.vue"),
        meta: {
            title: "",
            page: config.name,
        },
    },
];

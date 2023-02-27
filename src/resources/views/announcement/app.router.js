const config = { prefix: "/announcements/", name: "announcements" };
export default [
    {
        path: config.prefix,
        name: `${config.name}.index`,
        component: () => import("./list.component.vue"),
        meta: {
            title: "Repair",
            page: config.name,
        },
    },
    {
        path: config.prefix + "/show",
        name: `${config.name}.index`,
        component: () => import("./show.component.vue"),
        meta: {
            title: "Repair",
            page: config.name,
        },
    },
];

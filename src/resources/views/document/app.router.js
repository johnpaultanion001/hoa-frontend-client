const config = { prefix: "/documents/", name: "documents" };
export default [
    {
        path: config.prefix,
        name: `${config.name}.index`,
        component: () => import("./list.component.vue"),
        meta: {
            title: "Logbook",
            page: config.name,
        },
    },
];

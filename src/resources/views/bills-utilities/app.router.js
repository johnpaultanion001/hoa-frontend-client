const config = { prefix: "/bills-utilities/", name: "bills-utilities" };
export default [
    {
        path: config.prefix,
        name: `${config.name}.index`,
        component: () => import("./list.component.vue"),
        meta: {
            title: "Bills / Utilities",
            page: config.name,
        },
    },
];

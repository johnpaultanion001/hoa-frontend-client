const config = { prefix: "/repairs/", name: "repairs" };
export default [
    {
        path: config.prefix,
        name: `${config.name}.index`,
        component: () => import("./list.component.vue"),
        meta: {
            title: "Reservation and Bookings",
            page: config.name,
        },
    },
];

import SampleRouter from "../resources/views/sample/app.router";
import DashboardRouter from "../resources/views/dashboard/app.router";
import BillsUtilitiesRouter from "../resources/views/bills-utilities/app.router";
import ReservationRouter from "../resources/views/reservation/app.router";
import RepairRouter from "../resources/views/repair/app.router";
import EventRouter from "../resources/views/events/app.router";
import AnnouncementRouter from "../resources/views/announcement/app.router";
import LogbookRouter from "../resources/views/logbook/app.router";
import DocumentRouter from "../resources/views/document/app.router";
import InquiryRouter from "../resources/views/inquiry/app.router";
import ProfileRouter from "../resources/views/profile/app.router";
const config = { prefix: "/" };
export default [
    {
        path: config.prefix,
        component: () => import("../resources/views/dashboard/app.component"),
        children: DashboardRouter,
        meta: {},
    },
    {
        path: `${config.prefix}bills-utilities`,
        component: () => import("../resources/views/bills-utilities/app.component"),
        children: BillsUtilitiesRouter,
        meta: {},
    },
    {
        path: `${config.prefix}samples`,
        component: () => import("../resources/views/sample/app.component"),
        children: SampleRouter,
        meta: {},
    },
    {
        path: `${config.prefix}reservations`,
        component: () => import("../resources/views/reservation/app.component"),
        children: ReservationRouter,
        meta: {},
    },
    {
        path: `${config.prefix}repairs`,
        component: () => import("../resources/views/repair/app.component"),
        children: RepairRouter,
        meta: {},
    },
    {
        path: `${config.prefix}events`,
        component: () => import("../resources/views/events/app.component"),
        children: EventRouter,
        meta: {},
    },
    {
        path: `${config.prefix}announcements`,
        component: () => import("../resources/views/announcement/app.component"),
        children: AnnouncementRouter,
        meta: {},
    },
    {
        path: `${config.prefix}logbooks`,
        component: () => import("../resources/views/logbook/app.component"),
        children: LogbookRouter,
        meta: {},
    },
    {
        path: `${config.prefix}documents`,
        component: () => import("../resources/views/document/app.component"),
        children: DocumentRouter,
        meta: {},
    },
    {
        path: `${config.prefix}inquiries`,
        component: () => import("../resources/views/inquiry/app.component"),
        children: InquiryRouter,
        meta: {},
    },
    {
        path: `${config.prefix}profile`,
        component: () => import("../resources/views/profile/app.component"),
        children: ProfileRouter,
        meta: {},
    },
];

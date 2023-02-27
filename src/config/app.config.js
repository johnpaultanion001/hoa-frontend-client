import firebaseConfig from "./firebase.config";

const config = Object.freeze({
    base_url: process.env.BASE_URL,
    api_url: `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VERSION}/client`,
    end_point: {
        samples: "samples",
        auth: "authorized",
        bookings: "bookings",
        files: "files",
        services: "services",
        visitor_logs: "visitor-logs",
        events_announcements: "event-announcements",
        documents: "documents",
        advertisements: "advertisements",
        user_settings: "user-settings",
        user_details: "user-details",
        inquiries: "inquiries",
        surveys: "surveys",
        responses: "responses",
    },
    firebaseConfig: firebaseConfig,
    fb_page_id: process.env.VUE_APP_FB_PAGE_ID,
    base_client: process.env.VUE_APP_BASE_CLIENT,
});

export default config;

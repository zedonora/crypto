// Global
const HOME = "/";
const DETAIL = "/:id";

// API
const API = "/api";

const routes = {
    home: HOME,
    detail: id => {
        if (id) {
            return `/${id}`;
        } else {
            return DETAIL;
        }
    },
    api: API,
};

export default routes;
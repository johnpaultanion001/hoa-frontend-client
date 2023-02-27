import api from "../../globals/client";
import config from "../../config/app.config";

var promise;

export default class SurveyService {
    store(data) {
        promise = api.client.post(`/${config.end_point.surveys}`, data);
        return promise;
    }

    update(id, data) {
        promise = api.client.put(`/${config.end_point.surveys}/${id}`, data);
        return promise;
    }

    async list() {
        promise = await api.client.get(`/${config.end_point.surveys}`);
        return promise;
    }

    show(id) {
        promise = api.client.get(`/${config.end_point.surveys}/${id}`);
        return promise;
    }

    delete(id) {
        promise = api.client.delete(`/${config.end_point.surveys}/${id}`);
        return promise;
    }
}

export const surveyService = new SurveyService();

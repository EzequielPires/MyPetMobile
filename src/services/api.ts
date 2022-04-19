import axios from "axios";

export function getAPIClient() {
    const api = axios.create({
        baseURL: 'http://192.168.0.138:3000'
    })
    return api;
}

export const api = getAPIClient();
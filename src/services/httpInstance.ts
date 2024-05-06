import Config from "../config"
import axios from "axios";

const httpInstance = axios.create({
    baseURL: Config.API_URL,
    
});

httpInstance.interceptors.request.use(
    async (config) => {
        const newConfig = { ...config};
        //newConfig.header.Authorization = Bearer
        //nerConfig.headers["X-Version"] = "1.0.0";
        //NewConfig.headers["X-Signature"] = demoToken

        return newConfig;
    },
    (error) => {
        return Promise.reject(error);
    }
);

httpInstance.interceptors.response.use(
    (response) => {
        //console.log(response;
            return response;
        
    },
    (error) => {
        return Promise.reject(error);
    }

);

export default httpInstance;
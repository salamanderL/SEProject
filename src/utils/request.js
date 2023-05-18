import axios from 'axios';

const service = axios.create({
    timeout: 5000,
    baseURL: 'https://mock.apifox.cn/m1/2678310-0-default',
    withCredentials: true
});

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            console.log("response data", response.data)
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;

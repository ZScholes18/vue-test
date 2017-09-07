import axios from 'axios';
import qs from 'qs';

const Axios = axios.create({
    timeout: 10000,
    responseType: 'json',
    withCredentials: true
});

Axios.interceptors.request.use(
    config => {
        if (
            config.method === 'post' ||
            config.method === 'put' ||
            config.method === 'delete'
        ) {
            // 序列化
            config.data = qs.stringify(config.data);
        }

        // if (localStorage.token) {
        //     config.headers.Authorization = localStorage.token;
        // }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    res => {
        if (res.data.token) {
            console.log(res.data.token);
        }
        return res;
    },
    error => {
        return Promise.reject(error);
    }
);
// export default {
//     install: function (Vue) {
//         Object.defineProperty(Vue.prototype, '$http', { value: Axios });
//     }
// };
export default Axios;

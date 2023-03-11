import axios from 'axios';

const request = axios.create();

request.interceptors.response.use(response => {
    if(response.status === 200 && response.data.code === 0) {
        if(response.headers["Authrization"]) {
            localStorage.setItem("token",response.headers["Authrization"]);
        }
        return response.data.data;
    }
})

request.interceptors.request.use(request => {
    const token = localStorage.getItem("token");
    if(token) {
        request.headers["Authorization"] = token;
    }
    
    return request;
})

export default request;
import axios from 'axios';

const request = axios.create();

request.interceptors.response.use(response => {
    if(response.status === 200 && response.data.code === 0) {
        return response.data.data;
    }
})

export default request;
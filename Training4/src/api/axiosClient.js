import axios from 'axios';

const axiosClient = axios.create({
    // baseURL: "https://karljoke.herokuapp.com/jokes/random",
    headers: {
        "content-type": "application/json",
    },
});

axiosClient.interceptors.request.use(async (config) => {
    //Handle token here...
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    //Handle error here...
    throw error;
});

export default axiosClient;
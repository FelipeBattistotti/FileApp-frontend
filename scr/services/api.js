import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.100.15:5002',
});

export default api;

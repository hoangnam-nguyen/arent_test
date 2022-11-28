import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const getPosts = (page, postIds) => API.post(`/posts?page=${page}`, postIds);

export const signin = (formData) => API.post('/user/signin', formData);
export const signup = (formData) => API.post('/user/signup', formData);
export const updateUser = (userData) => API.patch('/user', userData);
export const getUser = (userId) => API.get(`/user/${userId}`);

import axios from 'axios';

const API = axios.create({baseURL : 'http://localhost:5000'});

// https://toy-bank-volunteer.herokuapp.com/


export const fetchTasks = () => API.get('/tasks');

export const fetchTasksClass = () => API.get('/classification');

// export const updateTask = (id , updatedTask) =>API.patch(`/tasks/${id}`, updatedTask);



const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const requestPost = (id, uid) => axios.patch(`${url}/${id}/requestPost`, uid);
export const assignPost = (id, assigned) => axios.patch(`${url}/${id}/assignPost`, assigned);
export const donePost = (id, completed) => axios.patch(`${url}/${id}/donePost`, completed);


export const signIn = (formData) => API.post('user/signin', formData);

export const signUp = (formData) => API.post('user/signup', formData);

export const getUser = () => API.get('user');
export const getOneUser = (id) => API.get(`user/${id}`, id);

export const verifyUser = (id, updateUser) =>API.patch(`user/${id}`, updateUser);
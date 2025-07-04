import axios from 'axios';

const API = axios.create({ baseURL: '/api/profile' });

export const getProfile = () => API.get('/');
export const updateProfile = (data) => API.put('/', data);
export const uploadAvatar = (formData) => API.post('/upload-avatar', formData);
export const uploadDocuments = (formData) => API.post('/upload-documents', formData);
export const deleteDocument = (filename) => API.delete(`/documents/${filename}`);
export const updateAvailability = (data) => API.put('/availability', data);
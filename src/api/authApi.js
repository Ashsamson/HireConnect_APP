import axios from 'axios';

const API = axios.create({ baseURL: '/api' });

export const register = (data) => API.post('/register', data);
export const login = (data) => API.post('/login', data);
export const resendOtp = (data) => API.post('/resend-otp', data);
export const verifyOtp = (data) => API.post('/verify-otp', data);
export const forgotPassword = (data) => API.post('/forgot-password', data);
export const resetPassword = (data) => API.post('/reset-password', data);
export const logout = () => API.post('/logout');
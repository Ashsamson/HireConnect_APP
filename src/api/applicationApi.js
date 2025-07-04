import axios from 'axios';

const API = axios.create({ baseURL: '/api' });

export const applyToProject = (projectId, data) =>
  API.post(`/projects/${projectId}/apply`, data);
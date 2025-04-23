// src/api/api.ts

import axios from 'axios';

// Create an Axios instance (optional, you can use default axios)
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',  // Your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

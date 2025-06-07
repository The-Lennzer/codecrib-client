import axios, { AxiosError, AxiosInstance } from 'axios';

const Request = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    timeout: 10000,
    withCredentials: true,
    headers: {
    'Content-Type': 'application/json',
  },
})

Request.interceptors.request.use(
 (config) => {
    return config;
 },
 (error) => Promise.reject(error)
)

Request.interceptors.response.use(
 (response) => {
    return response;
 },
   (error: AxiosError) => {
    console.error('[API ERROR]', error.response?.status, error.message)
    return Promise.reject(error.response?.data || error)
  }
)

export default Request;
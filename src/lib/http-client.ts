/**
 * This file is used to create an axios instance and add request and response interceptors.
 */

import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '~root/configs/constants';
import { isJsonString } from '~root/utils';

export const httpClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// Add a request interceptor
httpClient.interceptors.request.use(
  (config) => {
    // get the token from local storage
    const auth = localStorage.getItem('auth');

    const token = auth && isJsonString(auth) ? JSON.parse(auth)?.token : null;

    // if the token is available, add it to the headers
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a request interceptor
httpClient.interceptors.response.use(
  (response) => {
    return response; // return response directly
  },
  (error) => {
    if (window.location.pathname !== '/auth/login') {
      // check if the error is 401
      if (error.response.status === 401) {
        // remove the token
        toast.error(
          error.response.status === 401
            ? 'Your session has been expired! Please login again.'
            : 'You are not authorized to access this resource!',
          {
            position: 'bottom-center',
            toastId: 'UNAUTHORIZED_ERROR',
          },
        );
        if (error.response.status === 401) {
          setTimeout(() => {
            localStorage.removeItem('auth');
            window.location.href = '/auth/login'; // redirect to login page
          }, 1000);
        }
      }
    }
    return Promise.reject(error); // return error directly if it's not 401
  },
);

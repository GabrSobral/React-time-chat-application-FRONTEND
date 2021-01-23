import axios from 'axios'

const api = axios.create({
    baseURL : "http://192.168.15.5:3001"
})

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  

export default api

export const TOKEN_KEY = "@wpp-Token";

export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);

export const login = token => {
  sessionStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
};
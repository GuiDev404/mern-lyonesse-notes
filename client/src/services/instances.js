import axios from "axios";
import { BASE_URL, DEFAULT_HEADERS } from "./config";
import TokenService from "./token.services";

const BASE_OPTIONS = {
  baseURL: BASE_URL,
  headers: DEFAULT_HEADERS,
}

const normalInstance = axios.create(BASE_OPTIONS);

const authInstance = axios.create(BASE_OPTIONS);

authInstance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = 'Bearer ' + token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authInstance.interceptors.response.use(response => {
  return response;
}, err => {
  return new Promise((resolve, reject) => {
      const originalReq = err.config;

      if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
          originalReq._retry = true;

          const tokens = { accessToken: TokenService.getLocalAccessToken(), refreshToken: TokenService.getLocalRefreshToken() }

          if(TokenService.getLocalAccessToken() && TokenService.getLocalRefreshToken()){
            const data = {
              refreshToken: TokenService.getLocalRefreshToken()
            }

            const responsePromise = normalInstance.post('http://localhost:5000/api/auth/refresh-token', data)
              .then(response=> {
                TokenService.setUser(response.data);
                originalReq.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
            
                return authInstance(originalReq); 
              })

              resolve(responsePromise)

            // let res = fetch('http://localhost:5000/api/auth/refresh-token', {
            //   method: 'POST',
            //   mode: 'cors',
            //   cache: 'no-cache',
            //   credentials: 'same-origin',
            //   headers: {
            //     'Content-Type': 'application/json',
            //     'Authorization': TokenService.getLocalAccessToken()
            //   },
            //   redirect: 'follow',
            //   referrer: 'no-referrer',
            //   body: JSON.stringify({
            //     refreshToken: TokenService.getLocalRefreshToken()
            //   })
            // })
            // .then(res => res.json())
            // .then(res => {
            //   TokenService.setUser(res);
            //   originalReq.headers['Authorization'] = `Bearer ${res.accessToken}`;
              
            //   return authInstance(originalReq); 
            // })

            // resolve(res);
          }
      }

      return reject(err);
    });
});

const requestAuth = (path, type, data)=> {
  if(data){
    return authInstance[type](path, data)
      .then(response=> response.data)
  }

  return authInstance[type](path)
      .then(response=> response.data)
}

export {
  authInstance,
  normalInstance,
  requestAuth
};

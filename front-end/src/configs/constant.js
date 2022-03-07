const APP_ENV = process.env;
export const CONSTANT = {
  API: APP_ENV.REACT_APP_API_URL,
  TIME_OUT: +APP_ENV.REACT_APP_TIME_OUT,
};


export const API = {
  USER: {
    GET: `${CONSTANT.API}/api/v1/users`
  },
  POST: {
    GET: `${CONSTANT.API}/api/v1/posts`
  }
};

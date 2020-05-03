/** Generate by swagger-axios-codegen */

import axiosStatic, { AxiosPromise, AxiosInstance } from 'axios';
export interface IRequestOptions {
  headers?: any;
}

let  serverUrl = 'http://127.0.0.1:5000'

interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
function axios(configs: IRequestConfig): AxiosPromise {
  return serviceOptions.axios ? serviceOptions.axios.request(configs) : axiosStatic(configs);
}

export class UserService {
  /**
   *
   */
  static postLogin(
    params: {
      /** User name */
      username?: string;
      /** Password */
      password?: string;
      /** An optional fields mask */
      xFields?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Session> {
    return new Promise((resolve, reject) => {
      const configs: IRequestConfig = { ...options, method: 'post' };
      configs.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      };
      let url = serverUrl+'/user/login';

      configs.url = url;
      configs.params = {};
      let data = JSON.stringify({ username: params['username'], password: params['password'] });

      configs.data = data;
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

export class Session {
  /**  */
  message: string;

  /**  */
  session: string;

  /**  */
  retcode: number;

  constructor(data: undefined | any = {}) {
    this['message'] = data['message'];
    this['session'] = data['session'];
    this['retcode'] = data['retcode'];
  }
}

import axios, { Method } from 'axios';
import { getCookie, listCookieStorageName, deleteCookieFunc } from './cookieUtils';

class API {
    http: any;
    baseUrl: any;
    headersConfig: any;
    headers: { 'content-type': string; Authorization: string };
    constructor(baseUrl, headersConfig) {
        this.http = axios.create({
            baseURL: (baseUrl && baseUrl.API_SERVER) || '',
        });

        this.baseUrl = baseUrl;
        this.headersConfig = headersConfig || null;

        this.http.interceptors.response.use(
            response => {
                return response;
            },
            err => {
                const { response } = err;
                if (response) {
                    switch (response.status) {
                        // case 401:
                        // this.logOutCall();
                        // return;
                        // case 403:
                        // history.push(RouterURL.error_403);
                        // return;
                        // hide page error
                        // case 404:
                        //     history.push(RouterURL.error_404);
                        //     return;
                        // case 500:
                        //     history.push(RouterURL.error_500);
                        //     return Promise.reject(err);
                        default:
                            return Promise.reject(err);
                    }
                }
                return Promise.reject(err);
            },
        );
    }

    logOutCall() {
        deleteCookieFunc();
        // window.location.href = RouterURL.signin;
        // window.localStorage.clear();
    }

    setJwtToken(token, type) {
        let headersConfigBase = {
            'content-type': 'application/json',
            Authorization: `${type} ${token}`,
        };
        if (this.headersConfig) {
            headersConfigBase = {
                ...headersConfigBase,
                ...this.headersConfig,
            };
        }
        this.headers = headersConfigBase;
    }

    checkToken() {
        const isAccToken = getCookie(listCookieStorageName.access_token);
        const isTokenType = 'Bearer';
        if (isAccToken && isTokenType) {
            // console.log('isAccToken', isAccToken)
            this.setJwtToken(isAccToken, isTokenType);
        } else {
            // this.logOutCall();
            throw new Error('The API require token !!!');
        }
    }

    fetch(url, params, method = 'POST') {
        return axios({
            // baseURL: this.baseUrl.API_SERVER,
            method: method as Method,
            url,
            data: (method === 'POST' && params) || null,
            params: (method === 'GET' && params) || null,
        });
    }

    get(url, params) {
        this.checkToken();
        const paramsConfig = {
            params: params,
            headers: this.headers,
        };
        return this.http.get(url, paramsConfig);
    }

    getFile(url, params) {
        this.checkToken();
        const paramsConfig = {
            params: params,
            headers: this.headers,
            responseType: 'blob',
        };
        return this.http.get(url, paramsConfig);
    }

    put(path, payload) {
        this.checkToken();
        return this.http({
            data: payload,
            method: 'PUT',
            url: path,
            headers: this.headers,
        });
    }

    patch(path, payload) {
        this.checkToken();
        return this.http({
            data: payload,
            method: 'PATCH',
            url: path,
            headers: this.headers,
        });
    }

    post(url, payload) {
        this.checkToken();
        return this.http({
            data: payload,
            method: 'POST',
            url,
            headers: this.headers,
        });
    }

    postFile(url, payload, params) {
        this.checkToken();
        return this.http({
            data: payload,
            method: 'POST',
            url,
            headers: this.headers,
            responseType: 'blob',
            params: params || null,
        });
    }

    delete(url, payload) {
        this.checkToken();
        return this.http({
            data: payload,
            method: 'DELETE',
            url,
            headers: this.headers,
        });
    }
}

export default API;

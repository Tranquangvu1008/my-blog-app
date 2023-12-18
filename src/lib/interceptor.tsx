import axios, { AxiosInstance } from 'axios';
import _ from 'lodash';
import { removeEmptyArrayOrObjects } from '../utils/utils';
import {
  TIMEOUT_LIMITED,
  TIMEOUT_MESSAGE,
  TIMEOUT_CODE,
  ERROR_STATUS_CODE,
  SERVER_TIMEOUT_MESSAGE,
} from './constants';
 
export const axiosApiInstance: AxiosInstance = axios.create();
 
/** Timeout of an API request. Limited to 10 minutes. */
axiosApiInstance.defaults.timeout = TIMEOUT_LIMITED;
axiosApiInstance.defaults.timeoutErrorMessage = TIMEOUT_MESSAGE;
 
 
// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    // const json = localStorage.getItem('switchUser');
    // const jsonProxyUserId = localStorage.getItem('ProxyUserId');
 
    // // when proxy user we need to send proxyUserI into API
    // const switchUser = json ? JSON.parse(json) : {};
    // const proxyUserId = jsonProxyUserId ? JSON.parse(jsonProxyUserId) : '';
 
    // config.headers = {
    //   Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    //   // 'Authorization': `Bearer ${cookie.get('token')}`,
    //   //   'Authorization': `Bearer ${publicRuntimeConfig.token}`,
    //   'Accept-Language': 'Eng',
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    //   // SwitchUserId: switchUser.id ? switchUser.id : '',
    //   // ProxyUserId: proxyUserId,
    // };
 
    /** Recursively all values in `payload request` object and clear variables that are empty or undefined at or null. */
    /** Executed only when `isCleanEmptyValue` is `TRUE` */
    if (config.data && config.data.isCleanEmptyValue) {
      config.data = _.omit(removeEmptyArrayOrObjects({ ...config.data }), ['isCleanEmptyValue']);
    }
 
    return config;
  },
  (error) => {
    // Debug log error.
    Promise.reject(error);
  }
);
 
// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    // Debug log error.
    handleErrorResponse(error);
 
    // if (error?.response?.status === 401 || error?.response?.status === 500) {
    //   const account: any = publicClientApplication.getAllAccounts()[0];
    //   const logoutRequest = {
    //     account: publicClientApplication.getAccountByHomeId(account),
    //     postLogoutRedirectUri: MSAL_CONFIG.auth.redirectUri,
    //   };
    //   sessionStorage.clear();
    //   publicClientApplication
    //     .logoutRedirect(logoutRequest)
    //     .then(() => sessionStorage.clear())
    //     .catch((e) => {
    //       console.error(e);
    //     });
    // }
    return Promise.reject(error.response.data);
  }
);
 
const handleErrorResponse = (error: any) => {
  const errorStatus = Object.values(ERROR_STATUS_CODE);
  const hasError = errorStatus.includes(error?.response?.status);
  const hasServerError =
    (error?.code === TIMEOUT_CODE && error?.message === TIMEOUT_MESSAGE) ||
    error?.message === SERVER_TIMEOUT_MESSAGE;
  if (hasError || hasServerError) {
    // window.isRedirectToErrorPage = true;
 
    if (error?.response?.status === ERROR_STATUS_CODE[401]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (error?.response?.status === ERROR_STATUS_CODE[403]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (error?.response?.status === ERROR_STATUS_CODE[405]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (error?.response?.status === ERROR_STATUS_CODE[406]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (error?.response?.status === ERROR_STATUS_CODE[408]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (error?.response?.status === ERROR_STATUS_CODE[411]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (error?.response?.status === ERROR_STATUS_CODE[412]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (error?.response?.status === ERROR_STATUS_CODE[413]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (error?.response?.status === ERROR_STATUS_CODE[414]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (error?.response?.status === ERROR_STATUS_CODE[415]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (error?.response?.status === ERROR_STATUS_CODE[416]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (error?.response?.status === ERROR_STATUS_CODE[421]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (error?.response?.status === ERROR_STATUS_CODE[422]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (error?.response?.status === ERROR_STATUS_CODE[425]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (error?.response?.status === ERROR_STATUS_CODE[428]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (error?.response?.status === ERROR_STATUS_CODE[429]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (error?.response?.status === ERROR_STATUS_CODE[431]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (error?.response?.status === ERROR_STATUS_CODE[500]) {
      window.open('/PageNotFound', '_self');
    }
 
    if (
      hasServerError ||
      error?.response?.status === ERROR_STATUS_CODE[501] ||
      error?.response?.status === ERROR_STATUS_CODE[502] ||
      error?.response?.status === ERROR_STATUS_CODE[503] ||
      error?.response?.status === ERROR_STATUS_CODE[504] ||
      error?.response?.status === ERROR_STATUS_CODE[505]
    ) {
      window.open('/PageNotFound', '_self');
    }
  }
};
 
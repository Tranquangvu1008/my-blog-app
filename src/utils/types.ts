export interface ResponseState<T> {
    data: T;
    error?: Error;
    status: string;
  }
   
  export interface ApiResponseState<T> {
    code: string;
    data: T;
    message: string;
  }
   
   
  export interface ResponseStateMessage<T> {
    data: T;
    status: string;
    code: string;
    message: string
  }
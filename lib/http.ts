import { appConfig } from "@/config/app";
import axios from "axios";

const instance = axios.create({
  baseURL: appConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNjY5ODYwYi1mNjUxLTRhNDAtOWMyOS04ZTI5NTZkZTk1ZmEiLCJyb2xlIjoiU3VwZXIgQWRtaW4iLCJzZXNzaW9uX2lkIjoiZWY5YmQ1NzYtMjBkYS00ZjI5LWI1NTctMTVmMzRlOTAzMTgwIiwibmFtZSI6ImtvbWV0IiwiaWF0IjoxNzA4MTkyMjA1LCJleHAiOjE3MDgyNzg2MDV9.pCRcrXRw8HCGscHJkHgwdr-LXj5sLSp4WGpd3gzCN_U"
  },
});

export const http = {
  fetcher: async (url: string) => {
    const resp = await instance.get(appConfig.baseUrl + url);
    return resp.data;
  },
  get: async (url: string, opts: any = {}) => {
    const resp = await instance.get(appConfig.baseUrl + url);
    return resp.data;
  },
  post: async (url: string, data: any, opts: any) => {
    const resp = await instance.post(appConfig.baseUrl + url, data);

    return resp.data;
  },
  put: async (url: string, data: any, opts: any) => {
    const resp = await instance.put(appConfig.baseUrl + url, data);

    return resp.data;
  },
  del: async (url: string, opts: any) => {
    const resp = await instance.delete(appConfig.baseUrl + url);

    return resp.data;
  },
  upload: async (url: string, data?: any) => {
    let req = await instance.post(appConfig.baseUrl + url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return req.data;
  },
//   uploadAntd: (args: any) => {
//     const file = args.file;
//     const request = http.upload(file).use(AuthIntercept);

//     request
//       .on("progress", (event: any) => {
//         args.onProgress(event);
//       })
//       .then((it: any) => {
//         args.onSuccess(it);
//       })
//       .catch((err: any) => {
//         args.onError(err);
//       });

//     return request;
//   },
};

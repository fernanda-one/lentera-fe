import { http } from "@/lib/http";
import useSWR from "swr";

type urlParams = {
    page?: number,
    limit?: number,
    search?: string | null
}

const url ={
    getUsers(params: urlParams) {
        return `/users?page=${params.page}&limit=${params.limit}&search=${params.search}`;
    },
};

const hooks = {
    useUsers(params: urlParams) {
        return useSWR(url.getUsers(params), http.fetcher);
    },
};

const api = {};

export const usersRepository = {
    url,
    hooks,
    api,
};
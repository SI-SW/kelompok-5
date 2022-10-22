import { baseApi } from "@/plugins/axios";

const api = '/api/todo';

const list = () => baseApi.get(`${api}`);
const del = (id) => baseApi.delete(`${api}/${id}`);

export { list, del };
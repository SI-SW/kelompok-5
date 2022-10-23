import { baseApi } from "@/plugins/axios";

const api = '/api/todo';

const list = () => baseApi.get(`${api}`);
const del = (id) => baseApi.delete(`${api}/${id}`);
const add = (body) => baseApi.post(`${api}`, body);
const edit = (id) => baseApi.put(`${api}/${id}`);

export { list, del, add, edit };
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
const api = axios.create({
    baseURL: API_URL,
    headers: { "Content-Type": "application/json" },
});
export const getOrchids = () => api.get("/orchids");
export const getOrchid = (id) => api.get(`/orchids/${id}`);
export const createOrchid = (payload) => api.post("/orchids", payload);
export const updateOrchid = (id, payload) => api.put(`/orchids/${id}`, payload);
export const deleteOrchid = (id) => api.delete(`/orchids/${id}`);
/*
export const getOrchids = () => api.get<Orchid[]>('')
export const createOrchid = (orchid: OrchidDraft) => api.post<Orchid>('', orchid)
export const updateOrchid = (id: number, orchid: OrchidDraft) => api.put<Orchid>(`/${id}`, orchid)
export const deleteOrchid = (id: number) => api.delete(`/${id}`)
*/
export default api;
import axios from "axios";

 const api = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    withCredentials:true
 })

 export const getSong = async({mood})=>{
    
    const res = await api.get("/api/song?mood="+mood)
    return (res.data)
}
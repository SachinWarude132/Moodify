import axios from "axios";

 const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
 })

 export const getSong = async({mood})=>{
    
    const res = await api.get("/api/song?mood="+mood)
    return (res.data)
}
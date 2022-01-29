import axios from "axios"
import { Router } from "react-router-dom";

export const userLogin=async (data)=>{
    return await axios.post("/auth/signin",{credentials:  data});
}
export const googleLogin=async (data)=>{
    return await axios.post("/auth/signin",{credentials:  data});
}
export const userSignup=async (data)=>{
    return await axios.post("/auth/signup",{credentials:  data});
}

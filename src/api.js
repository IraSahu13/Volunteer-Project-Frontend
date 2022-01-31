import axios from "axios"
import { Router } from "react-router-dom";

export const login=async (data)=>{
    return await axios.post("/auth/signin",{credentials:  data});
}
export const userLogin=async (data)=>{
    return await axios.post("/auth/signin",{credentials:  data});
}
export const googleLogin=async (data)=>{
    return await axios.post("/auth/signin",{credentials:  data});
}
export const signup=async (data)=>{
    return await axios.post("/auth/signup",{credentials:  data});
}
export const allInterns=async (data)=>{
    return await axios.get("/intern/allinterns");
}
export const allApplicants=async (data)=>{
    return await axios.get("/intern/getapplicants/61f38e56f544c8df5b405d30");
}
export const jobApply=async (data, token)=>{
    return await axios.post("/user/jobapply/61f6fe2575b4ff5389fb06dd", {credentials: data}, 
    {
        headers:{
            token: localStorage.getItem("token")
        }
    });
}

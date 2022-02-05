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
export const getUser=async (id)=>{
    return await axios.get(`/user/getuser/${id}`);
}
export const allInterns=async (data)=>{
    return await axios.get("/intern/allinterns");
}
export const allApplicants=async (id)=>{
    return await axios.get(`/intern/getapplicants/${id}`);
}
export const getIntern=async (id)=>{
    return await axios.get(`/intern/getintern/${id}`);
}
export const companyInterns=async ()=>{
    return await axios.get(`/company/getinterns`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const PostJob=async ()=>{
    return await axios.post(`/company/postjob`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const jobApply=async (data, internId)=>{
    return await axios.post(`/user/jobapply/${internId}`, {credentials: data}, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}



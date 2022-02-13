import axios from "axios"
import { Router } from "react-router-dom";

// ******  auth  ******** //
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
    return await axios.post("/auth/signup",data);
}

//****** user ******//
export const myAppliedJobs=async ()=>{
    return await axios.get(`/user/getappliedjobs`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const userInfo=async ()=>{
    return await axios.get(`/user/getuser`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const editUser=async ()=>{
    return await axios.get(`/user/edituser`, 
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

//******* interns *******//
export const allApplicants=async (id)=>{
    return await axios.get(`/intern/getapplicants/${id}`);
}
export const allInterns=async (data)=>{
    return await axios.get("/intern/allinterns");
}
export const getIntern=async (id)=>{
    return await axios.get(`/intern/getintern/${id}`);
}

//****** company ******//
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

//****** resume ******//
export const PostResume=async (data)=>{
    return await axios.post(`/resume/postresume`,{credentials: data},
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const getResume=async ()=>{
    return await axios.get(`/resume/getresume`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const editResume=async (data)=>{
    return await axios.put(`/resume/editresume`, data,
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}

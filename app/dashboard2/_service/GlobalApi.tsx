import axios from "axios";

const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY;
const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api/',
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})

const CreateNewResume=(data:any)=>axiosClient.post('/user-resumes',data);

const GetUserResumes=(userEmail:any)=>axiosClient.get('/user-resumes?filters[userEmail][$eq]='+userEmail);

const UpdateResumeDetail=(id:any,data:any)=>axiosClient.put('/user-resumes/'+id,data)

const GetResumeById=(id:any)=>axiosClient.get('/user-resumes/'+id+"?populate=*")

const DeleteResumeById=(id:any)=>axiosClient.delete('/user-resumes/'+id)

export default{
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResumeById
}
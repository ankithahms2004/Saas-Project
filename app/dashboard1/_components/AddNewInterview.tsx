"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { chatSession } from "@/utils/GeminiAIModal"
import { Loader, LoaderCircle } from "lucide-react"
import {v4 as uuidv4} from 'uuid';
import { db } from "@/utils/db"
  
import React, { useState,useEffect } from 'react'
import { useRouter } from "next/navigation"
import { MockInterview } from "@/utils/schema"
import { useUser } from "@clerk/nextjs"
import moment from "moment"

export interface Jobdetails{
   res:any,
}

const AddNewInterview = () => {

       const [openDialog,setOpenDialog] = useState(false);
       const [jobPosition,setJobPosition] = useState<any|undefined>();
       const [jobDesc,setJobDesc] = useState<any|undefined>();
       const [jobExperience,setJobExperience] = useState<any|undefined>();
       const [loading,setLoading]=useState(false)
       const [jsonResponse,setJsonResponse] = useState([]);
       const {user} = useUser();
       const router=useRouter();

            const onSubmit=async(e:any)=>{
            e.preventDefault();
            setLoading(true)
            const InputPrompt="Job Position:"+jobPosition+",Job Description :"+jobDesc+",Years of Experience:"+jobExperience+" , Depends on Job Position ,Job Description & Years of Experience give us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" Interview question along with Answer in Json format ,Give us question and answer field in JSON.Prototype will be Array not an object."
            const result=await chatSession.sendMessage(InputPrompt)
            let MockJsonResp =(result.response.text()).replace('```json','').replace('```','')
             MockJsonResp = MockJsonResp.trim();
            // console.log(JSON.parse(MockJsonResp));

            setJsonResponse(MockJsonResp);
            if(MockJsonResp){
           const resp = await db.insert(MockInterview).values({
            mockId:uuidv4() as any,
            jsonMockResp:MockJsonResp,
            jobPosition:jobPosition as any,
            jobDesc:jobDesc as any,
            jobExperience:jobExperience as any,
            createdBy:user?.primaryEmailAddress?.emailAddress as any,
            createdAt:moment().format('DD-MM-yyyy') as any
           }).returning({mockId:MockInterview.mockId})
           console.log("id:",resp)
           if(resp){
            setOpenDialog(false);
            router.push('/dashboard1/Interview/'+resp[0]?.mockId)
           }
          }    
          else{
            console.log("ERROR...!")
          }
// router.push(`/dashboard1/Interview/'mockId:${mockId}'&'jobPosition:${jobPosition}'&'jobDesc:${jobDesc}'&'jobExperience:${jobExperience}'`);

         
            setLoading(false)
        }
        
        
       

  return (
    <div>
      
        <div onClick={()=>setOpenDialog(true)} className='p-10 border shadow-md hover:shadow-xl hover:scale-105 cursor-pointer transition-all rounded-lg'>
            <h2 className='text-center text-lg'> + Add New</h2>
        </div>
        <Dialog open={openDialog}>
  <DialogContent className="bg-white max-w-2xl">
    <DialogHeader>
      <DialogTitle className=" text-2xl text-slate-700">Tell us more about your Interview</DialogTitle>
      <DialogDescription>
        <form onSubmit={onSubmit}>
       <div>
        
        <h2>
            Add Details about your job position/role, job description and years of expeerience
        </h2>
        <div className="mt-7  my-3">
            <label  className="ml-3">Job Role/Job Position</label>
            <Input className="rounded-full border" placeholder="Ex.Full stack Developer" type="any" required onChange={(event)=>setJobPosition(event.target.value)}/>
        </div>
        <div className="mt-10 my-3 ">
            <label  className="ml-3">Job Description/Tech Stack (in Short)</label>
            <Textarea className="rounded-full border" placeholder="Ex.React, Angular, NodeJs,MySql,MongoDb,Express... " required onChange={(event)=>setJobDesc(event.target.value)}/>
        </div>
        <div className="mt-10 my-3 ">
            <label className="ml-3">Years of Experience</label>
            <Input className="rounded-full border" placeholder="Ex.5" max={100} type="any" required onChange={(event)=>setJobExperience(event.target.value)}/>
        </div>
       </div>
        <div className="mt-10 mx-3 flex gap-5 justify-end">
            <Button type="button" onClick={()=>setOpenDialog(false)} className="hover:shadow-md border rounded-xl hover:bg-red-600 bg-white shadow-lg">Cancel</Button>
            
            <Button disabled={loading} type="submit" className="hover:shadow-md border rounded-xl bg-primary shadow-lg">
            
              {loading?<><LoaderCircle className="animate-spin"/>Generating from AI</>:"Start Interview"}
            </Button>

        </div>
        </form>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}



export default AddNewInterview

// // export const getJobDetails = () => {
// //   return {
// //       jobPosition,
// //       jobDesc,
// //       jobExperience,
// //   };
// // };


// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Button } from "@/components/ui/button";
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { chatSession } from "@/utils/GeminiAIModal";
// import { Loader, LoaderCircle } from "lucide-react";
// import { v4 as uuidv4 } from 'uuid';
// import { useInterview } from '../context/InterviewContext';

// const AddNewInterview = () => {
//     const [openDialog, setOpenDialog] = useState(false);
//     const [jobPosition, setJobPosition] = useState<string>('');
//     const [jobDesc, setJobDesc] = useState<string>('');
//     const [jobExperience, setJobExperience] = useState<string>('');
//     const [loading, setLoading] = useState(false);
//     const [jsonResponse, setJsonResponse] = useState([]);
//     const router = useRouter();
//     const { setInterviewDetails } = useInterview();

//     const onSubmit = async (e: any) => {
//         e.preventDefault();
//         setLoading(true);
//         const InputPrompt = `Job Position: ${jobPosition}, Job Description: ${jobDesc}, Years of Experience: ${jobExperience}, Depends on Job Position, Job Description & Years of Experience give us ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} Interview question along with Answer in Json format, Give us question and answer field in JSON`;
//         const result = await chatSession.sendMessage(InputPrompt);
//         const MockJsonResp = (result.response.text()).replace('```json', '').replace('```', '');
//         setJsonResponse(MockJsonResp);
//         const mockId: string = uuidv4();
//         setOpenDialog(false);
//         setLoading(false);
//         setInterviewDetails({ jobPosition, jobDesc, jobExperience, interviewId: mockId });
//         router.push('/dashboard1/Interview/' + mockId);
//     };

//     return (
//         <div>
//             <div onClick={() => setOpenDialog(true)} className='p-10 border shadow-md hover:shadow-xl hover:scale-105 cursor-pointer transition-all rounded-lg'>
//                 <h2 className='text-center text-lg'> + Add New</h2>
//             </div>
//             <Dialog open={openDialog}>
//                 <DialogContent className="bg-white max-w-2xl">
//                     <DialogHeader>
//                         <DialogTitle className=" text-2xl text-slate-700">Tell us more about your Interview</DialogTitle>
//                         <DialogDescription>
//                             <form onSubmit={onSubmit}>
//                                 <div>
//                                     <h2>Add Details about your job position/role, job description and years of experience</h2>
//                                     <div className="mt-7 my-3">
//                                         <label>Job Role/Job Position</label>
//                                         <Input className="rounded-md border" placeholder="Ex. Full stack Developer" type="string" required onChange={(event) => setJobPosition(event.target.value || '')} />
//                                     </div>
//                                     <div className="mt-10 my-3">
//                                         <label>Job Description/Tech Stack (in Short)</label>
//                                         <Textarea className="rounded-md border" placeholder="Ex. React, Angular, NodeJs, MySql, MongoDb, Express..." required onChange={(event) => setJobDesc(event.target.value || '')} />
//                                     </div>
//                                     <div className="mt-10 my-3">
//                                         <label>Years of Experience</label>
//                                         <Input className="rounded-md border" placeholder="Ex. 5" max={100} type="number" required onChange={(event) => setJobExperience(event.target.value || '')} />
//                                     </div>
//                                 </div>
//                                 <div className="mt-10 mx-3 flex gap-5 justify-end">
//                                     <Button type="button" onClick={() => setOpenDialog(false)} className="hover:shadow-md border rounded-xl hover:bg-red-600 bg-white shadow-lg">Cancel</Button>
//                                     <Button disabled={loading} type="submit" className="hover:shadow-md border rounded-xl bg-primary shadow-lg">{loading ? <><LoaderCircle className="animate-spin" />Generating from AI</> : "Start Interview"}</Button>
//                                 </div>
//                             </form>
//                         </DialogDescription>
//                     </DialogHeader>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     );
// };

// export default AddNewInterview;

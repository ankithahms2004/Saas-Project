"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import ResumePreview from '@/app/dashboard2/resume/_compoonents/ResumePreview';
import { ResumeInfoContext } from '@/app/dashboard2/_context/ResumeInfoContext';
import GlobalApi from '@/app/dashboard2/_service/GlobalApi';
import { useParams } from 'next/navigation';
import  {RWebShare}  from 'react-web-share'
import Link from 'next/link';
import { Home } from 'lucide-react';

const ViewResume = () => {
  const [resumeInfo,setResumeInfo]=useState<any>();
  const {resumeId} = useParams();
   
  useEffect(()=>{
    GetResumeInfo();
  },[])

  const HandleDownload=()=>{
        window.print();
     }

  const GetResumeInfo=()=>{
        GlobalApi.GetResumeById(resumeId).then(resp=>{
           console.log(resp.data.data);
           setResumeInfo(resp.data.data);
         })
    }
  return (
  
      <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}} >
      <div id='no-print'>
      <div className='shadow-lg flex justify-between pr-5'>
        <Image src={'/logo.svg'} alt='logo' width={160} height={100} className='p-3'/>
        <UserButton/>
    </div>
    <div className='flex mt-3 ml-3'>
        <Link href={'/dashboard2'}>
          <Button className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'>
            <Home />Home
          </Button>
        </Link>
      </div>
    
    <div className='my-10'>
      <h2 className='text-center text-2xl font-medium'>Congratulations! your ultimate AI Generated Resume is Ready</h2>
      <p className='text-center text-gray-600'>Now you are ready to download your resume and you can share unique resume url with your friends and family </p>
      <div className='flex justify-between px-44 my-10'>
        <Button onClick={HandleDownload} className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'>Download</Button>
        <RWebShare
      data={{
        text: "Hello Everyone, This is my resume please open url to see it",
           url:"https://saas-project-bice-two.vercel.app/dashboard2/my-resume/"+resumeId+"/view",
            title: resumeInfo?.firstName+" "+resumeInfo?.lastName+"resume",
        }}
         onClick={() => console.log("shared successfully!")}>
           <Button className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'>Share</Button>
       </RWebShare>
        </div>
      </div>
      </div>
      <div id="print-area">
        <div  className='my-10 mx-10 md:mx-20 lg:mx-36 shadow-lg'>
        <ResumePreview/>
        </div>
        </div>
    </ResumeInfoContext.Provider>
  
  )
}

export default ViewResume
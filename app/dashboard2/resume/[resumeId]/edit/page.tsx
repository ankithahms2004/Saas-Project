"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import FormSection from '../../_compoonents/FormSection';
import ResumePreview from '../../_compoonents/ResumePreview';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image'
import { ResumeInfoContext } from '@/app/dashboard2/_context/ResumeInfoContext';

import GlobalApi from '@/app/dashboard2/_service/GlobalApi';

const EditResume = () => {
  const [resumeInfo,setResumeInfo]=useState<any>();
  const {resumeId}=useParams();
  useEffect(()=>{
       
    GetResumeInfo();
},[])
    const GetResumeInfo=()=>{
      GlobalApi.GetResumeById(resumeId).then(resp=>{
        console.log(resp.data.data);
        setResumeInfo(resp.data.data);
      })
  }

  return (
    <>
    
    <div className='shadow-lg flex justify-between pr-5'>
        <Image src={'/logo.svg'} alt='logo' width={160} height={100} className='p-3'/>
        <UserButton/>
    </div>
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
    {/* {---FormSection---} */}
    <FormSection />
    {/* {---PreviewSection---} */}
    <ResumePreview/>
    </div>
    </ResumeInfoContext.Provider>
    </>
  )
}

export default EditResume
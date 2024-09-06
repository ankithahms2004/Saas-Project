"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { UserButton, useUser } from '@clerk/nextjs'
import AddResume from './AddResume'

import ResumeCardItem from './ResumeCardItem'
import GlobalApi from '../_service/GlobalApi'


const Header = () =>{
    const [resumeList,setResumeList]=useState<any>([]);

    const {user} = useUser();
    useEffect(()=>{
      user&&GetResumesList()
    },[user])

  const GetResumesList=()=>{
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
    .then(resp=>{
      console.log(resp.data.data)
      setResumeList(resp.data.data);
    })
       }  
          return (
    <>
    <div className='shadow-lg flex justify-between pr-5'>
        <Image src={'/logo.svg'} alt='logo' width={160} height={100} className='p-3'/>
        <UserButton/>
    </div>
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating AI resume to your next Job role</p>
      <div className='grid grid-cols-2 
      md:grid-cols-3 lg:grid-cols-5 gap-5
      mt-10
      '>
        <AddResume/>
        {resumeList&&resumeList.map((resume:any,index:any)=>(
            <ResumeCardItem resume={resume} key={index} refreshData={GetResumesList}/>
        ))}
        
        {/* <AddResume/>
        {resumeList.length>0?resumeList.map((resume,index)=>(
          <ResumeCardItem resume={resume} key={index} refreshData={GetResumesList} />
        )):
        [1,2,3,4].map((item,index)=>(
          <div className='h-[280px] rounded-lg bg-slate-200 animate-pulse'>
          </div>
        ))
        } */}
      </div>
    </div>
    </>
  )
}

export default Header
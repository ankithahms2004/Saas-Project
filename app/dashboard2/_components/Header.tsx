"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { UserButton, useUser } from '@clerk/nextjs'
import AddResume from './AddResume'





const Header = () =>{
    const [resumeList,setResumeList]=useState<any>([]);

    const {user} = useUser();
    useEffect(()=>{
      user
    },[user])

          return (
    <>
    <div id='no-print' className='shadow-lg bg-slate-50 flex p-2 justify-between pr-5'>
        <Image src={'/logo.svg'} alt='logo' width={160} height={100} className='p-3'/>
        <h1 className='hidden md:flex gap-2 items-center font-bold text-slate-800'>Explore the Power of AI - 
      <h2 className='hidden md:flex gap-6 items-center font-semibold text-slate-700'> Get your Resumes Created in just seconds...</h2>
        </h1>
        <UserButton/>
    </div>
    <div className='p-10 md:px-18 flex lg:px-30'>
    <div>
    <h2 className='font-bold text-3xl'>AI Resume</h2>
    <p className='font-semibold'>Start Creating AI resume to your next Job role</p>
    <div className='p-5 mt-5 border shadow-md rounded-lg border-blue-200 bg-blue-100'>
     <p className=''>
      <h1 className='font-bold underline'>Note: </h1> There is a Sample Resume that is been given in the Preview section<br/>
      along with all the neccessary fields of the resume once the <br/> user clicks on the plus sign and enter the Job title of the user<br/> he will be directed to the editing page where the user can edit<br/> all the fields in the resume based on the sample format that<br/> is attached in the preview section. <br/>And then finally Download your resume at the end. 
      </p></div>
      <div className='p-5 mt-8 border shadow-md rounded-lg border-yellow-200 bg-yellow-100'>
        <p><h1 className='font-bold underline'>Leveraging AI: 
          </h1> While Building your Resume if you get stuck in adding your<br/> summary or the description for your professional<br/> experience that you previously had then you can get it done<br/> through AI in just seconds... By just clicking Generate from AI. </p>
      </div>
      </div>
      <div className='grid grid-cols-2 
      md:grid-cols-1 ml-20 lg:grid-cols-3 gap-5
      mt-32
      '>
        <AddResume/>
        
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
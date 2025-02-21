"use client"
import React, { useEffect, useState } from 'react';
import Webcam from "react-webcam";
import { Lightbulb, WebcamIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MockInterview } from '@/utils/schema';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm'


    const Interview = ({params}:any)=>{
         
        const [interviewData, setInterviewData] = useState<{
            id: number;
            createdBy: string;
            createdAt: string | null;
            jsonMockResp: string;
            jobPosition: string;
            jobDesc: string;
            jobExperience: string;
            mockId: string;
        } | undefined>(undefined);
            const [webCamEnable, setWebCamEnable] = useState(false);
   
        useEffect(()=>{
               GetInterviewDetails();
        },[])
      
        const GetInterviewDetails = async()=>{
            {/* @ts-ignore */}
            const result = await db.select().from(MockInterview)
            .where(eq(MockInterview.mockId,params.interviewId))
            setInterviewData(result[0])
        }

    return (
        <div className='my-10'>
            <h2 className='text-slate-700 text-2xl font-bold'>Let's Get Started : </h2>
            <div className='grid grid-cold-1 md:grid-cols-2 gap-10'>
                <div className='flex gap-5 flex-col my-5 '>
                    <div className='p-5 rounded-lg border shadow-md bg-blue-50 border-blue-200 flex flex-col gap-5'>
                        <h2 className='text-lg'><strong>Job Role/Job Position : </strong>{interviewData?.jobPosition}</h2>
                        <h2 className='text-lg'><strong>Job Description/Tech Stack : </strong>{interviewData?.jobDesc}</h2>
                        <h2 className='text-lg'><strong>Years of Experience : </strong>{interviewData?.jobExperience}</h2>
                    </div>
                    <div className='p-5 border shadow-md rounded-lg border-yellow-300 bg-yellow-100'>
                        <h2 className='flex gap-2 items-center text-yellow-500'><Lightbulb/><strong>Information</strong></h2> 
                        <h2 className='mt-3 text-yellow-500'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
                    </div>
                </div>
                <div className=''>
                    {webCamEnable ? <Webcam mirrored={true} onUserMedia={() => setWebCamEnable(true)} onUserMediaError={() => setWebCamEnable(false)} style={{
                        height: 300,
                        width: 300
                    }} /> :
                    <>
                        <WebcamIcon className='h-72 my-7 w-full p-20 bg-secondary rounded-lg border shadow' />
                        <Button onClick={() => setWebCamEnable(true)} className='bg-white w-full rounded-full shadow-md hover:bg-white hover:shadow-lg'>Enable Web Cam and Microphone</Button>
                    </>}
                </div>
            </div>
            <div className='flex justify-end items-end'>
                <Link href={'/dashboard1/Interview/'+params.interviewId+'/start'}>
                    <Button  className='bg-white ml-20 rounded-full shadow-md hover:bg-white hover:shadow-xl'>Start Interview</Button>
                </Link>
            </div>
        </div>
    );
};

export default Interview;

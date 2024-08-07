"use client"
import { MockInterview } from '@/utils/schema';
import React, { useEffect, useState } from 'react'
import { eq } from 'drizzle-orm';
import { db } from '@/utils/db';
import QuestionsSection from './_component/QuestionsSection';
import RecordAnswerSection from './_component/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';



const StartInterview = ({ params }: any) => {

    const [interviewData, setInterviewData] = useState<{
        id: number;
        createdBy: string;
        createdAt: string | null;
        jsonMockResp: string|null;
        jobPosition: string;
        jobDesc: string;
        jobExperience: string;
        mockId: string;
    } | undefined>(undefined);
    const [mockInterviewQuestions,setMockInterviewQuestions] = useState<any>();
    const [activeQuestionIndex,setActiveQuestionIndex] = useState(0);
   
     useEffect(()=>{
           GetInterviewDetails();
          //  console.log(mockInterviewQuestions);
     },[])
        

     const GetInterviewDetails = async()=>{
        {/* @ts-ignore */}
        const result = await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId,params.interviewId))

        const jsonMockResp =JSON.parse(result[0].jsonMockResp);
        setMockInterviewQuestions(jsonMockResp)
        setInterviewData(result[0]);
       
         
}
    

  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <QuestionsSection mockInterviewQuestions={mockInterviewQuestions}
            activeQuestionIndex={activeQuestionIndex}/>
            <RecordAnswerSection mockInterviewQuestions={mockInterviewQuestions}
             activeQuestionIndex={activeQuestionIndex}
             interviewData={interviewData}/>

        </div>
        <div className='flex justify-end gap-6 text-white my-5 ml-20'>
          {activeQuestionIndex>0&&<Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)} className='rounded-full shadow-lg hover:shadow-xl'>Previous Question</Button>}
          {activeQuestionIndex!=mockInterviewQuestions?.length-1&&<Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)} className='rounded-full shadow-lg hover:shadow-xl'>Next Question</Button>}
         {activeQuestionIndex==mockInterviewQuestions?.length-1&& <Link href={'/dashboard1/Interview/'+interviewData?.mockId+'/feedback'}><Button className='rounded-full shadow-lg hover:shadow-xl'>End Interview</Button></Link>}
        </div>
    </div>
  )

}

export default StartInterview
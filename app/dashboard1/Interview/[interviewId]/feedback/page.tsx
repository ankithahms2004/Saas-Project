"use client";
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible";
import { ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
//   import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
  

const Feedback = ({params}:any) => {
    // const Collapsible = CollapsiblePrimitive.Root
    const [feedbackList,setFeedbackList] = useState<any>([]);
    const router = useRouter();

    useEffect(()=>{
       GetFeedback();
    },[])  

    const GetFeedback = async ()=>{
          {/* @ts-ignore */}
          const result  = await db.select().from(UserAnswer).where(eq(UserAnswer.mockIdRef,params.interviewId))
          .orderBy(UserAnswer.id)

          setFeedbackList(result)
    }

  return (
    <div className='p-10'>
        
        {feedbackList?.length == 0? <h2 className='font-bold text-slate-700 text-xl'>No Interview Feedback Record Found</h2>:<>
            <h2 className='text-3xl font-bold text-green-500'>Congratulations!</h2>
            <h2 className='text-2xl font-semibold text-slate-600'>Here is your interview feedback</h2>
        <h2 className='text-slate-600'>Your overall interview rating:<strong>7/10</strong></h2>
        
        <h2 className='text-sm text-slate-500'>Find below interview question with correct answer, Your answer and feedback for improvement</h2>
        {feedbackList&&feedbackList.map((item:any,index:any)=>(
                   <Collapsible key={index} className='mt-7'>
                   <CollapsibleTrigger className='p-2 gap-7 w-full flex justify-between bg-slate-50 shadow-md rounded-md m-2 my-2 text-left'>
                   {item.question}<ChevronsUpDown className='h-4 wi-5'/>
                   </CollapsibleTrigger>
                   <CollapsibleContent>
                     <div className='flex flex-col gap-2'>
                        <h2 className='text-purple-500 p-2 border rounded-lg'>
                            <strong>Rating:</strong>{item.rating}
                        </h2>
                        <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-900'><strong>Your Answer :</strong>{item.userAns}</h2>
                        <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-900'><strong>Correct Answer :</strong>{item.correctAns}</h2>
                        <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-primary'><strong>Feedback :</strong>{item.feedback}</h2>
                     </div>
                   </CollapsibleContent>
                 </Collapsible>
                 
        ))}
        </>}
        <Button onClick={()=>router.replace('/dashboard1')} className='text-slate-700 bg-white shadow-lg rounded-full m-5 hover:bg-white hover:shadow-xl'>Go Home</Button>
    </div>
  )
}

export default Feedback
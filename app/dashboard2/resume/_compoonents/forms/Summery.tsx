"use client";
import { ResumeInfoContext } from '@/app/dashboard2/_context/ResumeInfoContext'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import { useUser } from '@clerk/nextjs';
import { resumeInfomation } from '@/utils/schema'
import { LoaderCircle } from 'lucide-react'
import { useSearchParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import { chatSession } from '@/utils/GeminiAIResumeModel'


const prompt = "Job Title : {jobTitle} , Depends on the job title give me summary for my resume within 4-5 lines"
// Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3-4 lines in array format and not in object format, With summery and experience_level Field in JSON Format
const Summery = ({enabledNext}:any) => {
    const {user} = useUser();
    const{resumeInfo,setResumeInfo} = useContext(ResumeInfoContext)
    const [value,setValue] = useState<any>()
    const [summery,setSummery] = useState<any>();
    const [loading,setLoading]=useState(false);
    const [loadingAI,setLoadingAI]=useState(false);
    const [aiGeneratedSummeryList,setAiGenerateSummeryList]=useState<any>();
    const searchParams = useSearchParams();
    useEffect(()=>{
        summery&&setResumeInfo({
            ...resumeInfo,
            summery:summery
        })
        // console.log()
    },[summery])

    const GenerateSummeryFromAI =async()=>{
        setLoadingAI(true)
        const result = await chatSession.sendMessage("Job Title: "+searchParams.get('title')+" , Depends on the job title give me summary for my resume within 4-5 lines in the array format")
        console.log(JSON.parse(result.response.text()));
        console.log(result)
        setAiGenerateSummeryList(JSON.parse(result.response.text()))
        setLoadingAI(false)
        enabledNext(true)
    }
    
    const handleInputChange= async()=>{
            setLoading(true)
            const result = await db.update(resumeInfomation).set({
                summary:summery
                  }).where(eq(resumeInfomation.createdBy,user?.primaryEmailAddress?.emailAddress as string))
                  
            console.log(result)
            setLoading(false)
            window.location.reload();
        }
    

        const [formList,setFormList] = useState<any>([])
          useEffect(()=>{
            user&&GetformList()
          },[user])
          const GetformList = async()=>{
          const result = await db.select({
            summery:resumeInfomation?.summary
          }).from(resumeInfomation).where(eq(resumeInfomation.createdBy,user?.primaryEmailAddress?.emailAddress as string))
          console.log(result);
          setFormList(result)
        }

  return (
    <div>
        <div className='p-5 shadow-lg rounded-lg border-t-secondary border-t-4 mt-10'>
         <h2 className='font-bold text-lg'>Summary</h2>
         <p>Add Summary for your job title grergsethesth and summary</p>
         <form className='mt-7'>
            <div className='flex justify-between items-end'>
                <label>Add Summary</label>
                <Button disabled={loadingAI} className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg' type='button' onClick={()=>GenerateSummeryFromAI()}>{loadingAI?
                <LoaderCircle className='animate-spin' />  :
                       <> 
         Generate from AI 
         </>}
        </Button>
            </div>
            <Textarea value={summery} defaultValue={formList[0]?.summery} className='mt-5 rounded-xl h-32 hover:shadow-md'
            onChange={(e)=>setSummery(e.target.value)} required/>
            <div className='mt-3 flex justify-end'>
                        <Button onClick={()=>handleInputChange()} className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg' type="submit"
                        disabled={loading}>
                            {loading?<LoaderCircle className='animate-spin' />:'Save'}
                            </Button>
                    </div>
                    
         </form>
         </div>

         {aiGeneratedSummeryList&& <div className='my-5'>
            <h2 className='font-bold text-lg'>Suggestions</h2>
            {aiGeneratedSummeryList?.map((item:any,index:any)=>(
                <div key={index} 
                onClick={()=>setSummery(item)}
                className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'>
                    <p>{item}</p>
                   
                </div>
            ))}
        </div>}

        

{/* {aiGeneratedSummeryList&& <div className='my-5'>
            <h2 className='font-bold text-lg'>Suggestions</h2>
            {aiGeneratedSummeryList?.map((item:any,index:any)=>(
                <div key={index} 
                onClick={()=>setSummery(item?.summary)}
                className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'>
                    <h2 className='font-bold my-1 text-primary'>Level: {item?.experience_level}</h2>
                    <p>{item?.summary}</p>
                </div>
            ))}
        </div>} */}

        
    </div>
  )
}

export default Summery
import { ResumeInfoContext } from '@/app/dashboard2/_context/ResumeInfoContext'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

import { LoaderCircle } from 'lucide-react'
import { useParams } from 'next/navigation'

import React, { useContext, useEffect, useState } from 'react'
import { chatSession } from '@/utils/GeminiAIResumeModel'
import GlobalApi from '@/app/dashboard2/_service/GlobalApi'

const prompt = "Job Title : {jobTitle} , Depends on the job title give me summary for my resume within 4-5 lines"
// Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3-4 lines in array format and not in object format, With summery and experience_level Field in JSON Format
const Summery = ({enabledNext}:any) => {
    const{resumeInfo,setResumeInfo} = useContext(ResumeInfoContext)
    const [value,setValue] = useState<any>()
    const [summery,setSummery] = useState<any>();
    const [loading,setLoading]=useState(false);
    const [aiGeneratedSummeryList,setAiGenerateSummeryList]=useState<any>();
    const params = useParams();
    useEffect(()=>{
        summery&&setResumeInfo({
            ...resumeInfo,
            summery:summery
        })
    },[summery])

    const GenerateSummeryFromAI =async()=>{
        setLoading(true)
        const result = await chatSession.sendMessage("Job Title : "+resumeInfo?.jobTitle+" , Depends on the job title give me summary for my resume within 4-5 lines in array format with different experience levels")
        console.log(JSON.parse(result.response.text()));
        setAiGenerateSummeryList(JSON.parse(result.response.text()))
        setLoading(false)
    }
    
    const onSave=(e:any)=>{
        e.preventDefault();
        setLoading(true)
        const data={
            data:{
                summery:summery
            }
        }
        GlobalApi.UpdateResumeDetail(params?.resumeId,data).then(resp=>{
            console.log(resp);
            setLoading(false);
           enabledNext(true)
           
        },(error)=>{
            setLoading(false);
        })
    }

  return (
    <div>
        <div className='p-5 shadow-lg rounded-lg border-t-secondary border-t-4 mt-10'>
         <h2 className='font-bold text-lg'>Summary</h2>
         <p>Add Summary for your job title</p>
         <form onSubmit={onSave} className='mt-7'>
            <div className='flex justify-between items-end'>
                <label>Add Summary</label>
                <Button className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg' type='button' onClick={()=>GenerateSummeryFromAI()}>Generate from AI</Button>
            </div>
            <Textarea value={summery} defaultValue={summery?summery:resumeInfo?.summery} className='mt-5 rounded-xl h-32 hover:shadow-md'
            onChange={(e)=>setSummery(e.target.value)} required/>
            <div className='mt-2 flex justify-end'><Button className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg' type="submit"
                disabled={loading}>
                    {loading?<LoaderCircle className='animate-spin' />:'Save'}
                    </Button></div>         
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
    </div>
  )
}

export default Summery
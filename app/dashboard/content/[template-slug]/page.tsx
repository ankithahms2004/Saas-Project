"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AIModal'
import { AIOutput } from '@/utils/schema'
import { db } from '@/utils/db'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'

interface PROPS{
    params:{
        'template-slug':string
    }
}

const CreateNewContent = (props:PROPS) => {
    const [aiOutput,setAiOutput]=useState<string>('')
    const {user}=useUser();
    const router = useRouter();
    const [loading,setLoading]=useState(false);
    const {totalUsage,setTotalUsage}= useContext(TotalUsageContext);
    const {updateCreditUsage,setUpdateCreditUsage} = useContext(UpdateCreditUsageContext)

    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);
const GenerateAIContent= async (formData:any)=>{
    if(totalUsage>=100000){
        router.push('/dashboard/billing')
        return;
    }
    setLoading(true);
    const SelectedPrompt=selectedTemplate?.aiPrompt;
    const FinalAIPrompt=JSON.stringify(formData)+", "+SelectedPrompt;

    const result=await chatSession.sendMessage(FinalAIPrompt);
    // console.log(result.response.text());
    setAiOutput(result?.response.text());
    await SaveInDb(formData,selectedTemplate?.slug,result?.response.text());

    setLoading(false)

    setUpdateCreditUsage(Date.now())
}

    const SaveInDb= async (formData:any,slug:any,aiResp:string)=>{
        const result = await db.insert(AIOutput).values({
            formData:formData,
            templateSlug:slug,
            aiResponse:aiResp,
            createdBy:user?.primaryEmailAddress?.emailAddress as string,
            createdAt:moment().format('DD/MM/yyyy'),

        })
    }
  return (
    <div className='p-2'>
        <Link href={'/dashboard'}>
        <Button className='bg-white hover:bg-white hover:shadow-lg'><ArrowLeft />Back</Button></Link>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any)=>GenerateAIContent(v)} loading={loading}/>
        <div className='col-span-2'>
        <OutputSection aiOutput={aiOutput}/>
        </div>
       
    </div>
    </div>
  )
}

export default CreateNewContent
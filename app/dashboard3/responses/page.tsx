"use client"
import { db } from '@/utils/db'
import { JsonForms } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import FormListItemResp from './_components/FormListItemResp'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

const Responses = () => {
    const {user} = useUser()
  const router = useRouter();
    const [formList,setFormList] = useState<any>()

    useEffect(()=>{
        user&&getformList()
},[user])
    const getformList =async()=>{
        const result=await db.select().from(JsonForms).where(eq(JsonForms?.createdBy,user?.primaryEmailAddress?.emailAddress as string))
        if(result){
            setFormList(result)
        }
    }
  return (
    <div className='p-10'>
         <h2 className='font-semibold text-slate-700 text-3xl'>Responses
    </h2>
    <h2 className='flex gap-2 p-3 items-center my-3'><Button onClick={()=>router.back()} className='bg-white shadow-md  hover:shadow-lg hover:bg-white rounded-2xl'><ArrowLeft/>Back</Button></h2>

    <div className='grid grid-cols-2 gap-5 md:grid-cols-3'>
        {formList?.map((form:any,index:any)=>(
           <FormListItemResp
           formRecord = {form}
           jsonForm={JSON?.parse(form.jsonform)}
           />
        ))}
    </div>
    </div>
  )
}

export default Responses
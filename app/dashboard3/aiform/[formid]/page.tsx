"use client"
import { db } from '@/utils/db'
import { JsonForms } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import FormUi from '../../edit-form/_components/FormUI'
import {Sparkles} from 'lucide-react'
import Link from 'next/link'

const LiveAiForm = ({params}:any) => {
    const [record,setRecord] = useState<any>()
    const [jsonForm,setJsonForm] = useState<any>([])

    useEffect(()=>{
        // console.log(params)
        params&&GetFormData();
    },[params])

    const GetFormData=async()=>{
        const result = await db.select().from(JsonForms).where(eq(JsonForms?.id,Number(params?.formid)))
        console.log(result)
        setRecord(result[0])
        if(result[0]?.jsonform !== null){
        setJsonForm(JSON.parse(result[0]?.jsonform))
        }
    }

  return (
    <div className='p-10 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 flex justify-center items-center'>
        {record&&<FormUi jsonForm={jsonForm} 
        onFieldUpdate={()=>console.log}
        deleteField={()=>console.log}
        editable={false}
        formId={record?.id}
        />}
        <Link href={'/dashboard3'}>
        <div className='flex gap-2 cursor-pointer text-white items-center fixed rounded-xl px-3 py-1 bottom-5 left-5 shadow-md'>
            <Sparkles/> Build your own AI form
        </div></Link>
    </div>
  )
}

export default LiveAiForm
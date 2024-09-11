"use client";
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { JsonForms } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import { ArrowLeft, Share2, SquareArrowOutUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import FormUi from '../_components/FormUI';

import Link from 'next/link';
import { RWebShare } from 'react-web-share';



const EditForm = ({params}:any) => {
  const [jsonForm,setJsonForm] = useState<any>([])
  const {user} = useUser();
  const router = useRouter();
  const [updateTrigger,setUpdateTrigger] = useState<any>();
  const [record,setRecord] = useState<any>([])

  useEffect(()=>{
    if (updateTrigger){
      setJsonForm((jsonForm))
      updateJsonFormInDb();
    }
    
  },[updateTrigger])
    const onFieldUpdate = (value:any,index:any)=>{
      (jsonForm?.formFields[index] || jsonForm?.form[index]).formLabel=value.label;
      (jsonForm?.formFields[index] || jsonForm?.form[index]).placeholderName=value.placeholder;
      setUpdateTrigger(Date.now())
    }

    const updateJsonFormInDb = async()=>{
      const result = await db.update(JsonForms).set({
        jsonform:jsonForm,
      }).where(and(eq(JsonForms?.id,record.id),
      eq(JsonForms.createdBy,user?.primaryEmailAddress?.emailAddress as string)))
      console.log(result)
    }

    const deleteField = (indexToRemove:any)=>{
      const result = (jsonForm?.formFields || jsonForm?.form)?.filter((item:any,index:any)=>index!=indexToRemove)
      console.log(result)
      if (jsonForm?.formFields) {
        jsonForm.formFields = result;
        alert("Deleted Successfully!")
    } else if (jsonForm?.form) {
        jsonForm.form = result;
        alert("Deleted Successfully!")
    }
          setUpdateTrigger(Date.now())
    }

  useEffect(()=>{
    user&&getFormData();
  },[user])
  const getFormData = async()=>{
     {/* @ts-ignore */}
    const result = await db.select().from(JsonForms).where(and(eq(JsonForms.id,params?.formId),
    eq(JsonForms.createdBy,user?.primaryEmailAddress?.emailAddress as string)))
    if (result[0]?.jsonform) {
      console.log(JSON.parse(result[0].jsonform));
      setRecord(result[0])
    setJsonForm(JSON.parse(result[0]?.jsonform))
  } else {
      console.log("jsonform is null or undefined");
  }
  
  }
  return (
    <div className='p-10'>
      <h1 className='font-bold text-2xl p-5 pb-0 text-center'>Edit your form By changing the tags or By deleting any field</h1>
      <h2 className='text-slate-900 text-center'>(Note: Once the Changes is saved cannot be retrieved again, make sure before submitting.)</h2>
      <div className='flex justify-between items-center'>
      <h2 className='flex gap-2 p-3 items-center my-3'><Button onClick={()=>router.back()} className='bg-white shadow-md  hover:shadow-lg hover:bg-white rounded-2xl'><ArrowLeft/>Back</Button></h2>
      
      <div className='flex gap-2'>
        <Link href={'/dashboard3/aiform/'+record?.id} target='_blank'><Button className='bg-white shadow-md  hover:shadow-lg flex gap-2 hover:bg-white rounded-2xl'><SquareArrowOutUpRight className='h-5 w-5'/>Live Preview</Button></Link>
        <RWebShare
        data={{
          text: jsonForm?.formHeading || jsonForm?.formSubheading+'Build your form in seconds with AI form builder',
          url: "https://saas-project-bice-two.vercel.app/dashboard3/aiform/"+record?.id,
          title: jsonForm?.formTitle,
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <Button className='bg-white shadow-md hover:shadow-lg hover:bg-white rounded-2xl' size="sm"><Share2 className='h-5 w-5'/>Share</Button>
       
      </RWebShare>      </div>
      </div>
      <div className='items-center justify-center'>
        {/* <div className='p-5 border bg-pink-50 rounded-lg shadow-lg'>
        <Controller/>
        </div> */}
        <div className='ml-28 w-[900px] border rounded-2xl p-5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 shadow-lg flex items-center justify-center'>
        <FormUi jsonForm={jsonForm}
        onFieldUpdate={onFieldUpdate}
        deleteField={(index:any)=>deleteField(index)}
        />
        </div>
      </div>
    </div>
  )
}

export default EditForm
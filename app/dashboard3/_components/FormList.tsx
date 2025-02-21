"use client"
import { db } from '@/utils/db'
import { JsonForms } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import FormListItem from './FormListItem'


const FormList = () => {
  const [formList,setFormList] = useState<any>([])
  const {user} = useUser()
  useEffect(()=>{
    user&&GetformList()
  },[user])
  const GetformList = async()=>{
    const result = await db.select().from(JsonForms).where(eq(JsonForms.createdBy,user?.primaryEmailAddress?.emailAddress as string))
    .orderBy(desc(JsonForms.id))
    console.log(result);
    setFormList(result)
  }
  return (
    <div className='mt-8 grid gap-8 grid-cols-2 md:grid-cols-3'>
      {formList.map((form:any,index:any)=>(
        <div>
          <FormListItem jsonForm={JSON.parse(form.jsonform)}
          formRecord = {form}
          refreshData={GetformList}
          />
        </div>

      ))}
    </div>
  )
}

export default FormList
import { db } from '@/utils/db'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { resumeInfomation } from '@/utils/schema'







const PersonalDetailPreview = ({resumeInfo}:any) => {
  const [formList,setFormList] = useState<any>([])
  const {user} = useUser()
  useEffect(()=>{
    user&&GetformList()
  },[user])
  const GetformList = async()=>{
  const result = await db.select({
    firstName: resumeInfomation?.firstName,
    lastName: resumeInfomation?.lastName,
    address: resumeInfomation?.address,
    phone: resumeInfomation?.phone,
    email: resumeInfomation?.email,
    jobTitle: resumeInfomation?.title
  }).from(resumeInfomation).where(eq(resumeInfomation.createdBy,user?.primaryEmailAddress?.emailAddress as string))
  console.log(result);
  setFormList(result)
}

  return (
    

    
    <div >
        <h2 className='font-bold text-xl text-center'>{formList[0]?.firstName} {formList[0]?.lastName}</h2>
        <h2 className='text-center text-sm font-medium'>{formList[0]?.jobTitle}</h2>
        <h2 className='text-center text-xs font-normal'>{formList[0]?.address}</h2>
        <div className='flex justify-between'>
            <h2 className='font-normal text-xs'
             >{formList[0]?.phone}</h2>
            <h2 className='font-normal text-xs'>{formList[0]?.email}</h2>
        </div>
        <hr className='border-[1.5px] my-2'/>
    </div>
   
  )
}

export default PersonalDetailPreview
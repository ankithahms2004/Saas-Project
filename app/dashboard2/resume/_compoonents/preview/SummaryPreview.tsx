import { db } from '@/utils/db'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { resumeInfomation } from '@/utils/schema'




const SummaryPreview = ({resumeInfo}:any) => {
  const [formList,setFormList] = useState<any>([])
  const {user} = useUser()
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
    <div><p className='text-xs'>
    {formList[0]?.summery}
</p></div>
  )
}

export default SummaryPreview
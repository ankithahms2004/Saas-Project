"use client"
import { Button } from '@/components/ui/button'
import { AIOutput } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { db } from '@/utils/db'
import { useUser } from '@clerk/nextjs'
import React, { useContext, useEffect, useState } from 'react'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'

const UsageTrack =  () => {

    const {user} = useUser();
    const {totalUsage,setTotalUsage}= useContext(TotalUsageContext);
    const {updateCreditUsage,setUpdateCreditUsage} = useContext<any>(UpdateCreditUsageContext)
     useEffect(()=>{
        user&&GetData();
     },[user]);

     useEffect(()=>{
        user&&GetData();
     },[updateCreditUsage&&user])
       
      const GetData= async ()=>{
        {/* @ts-ignore */}
        const result:any= await db.select().from(AIOutput)
    .where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress as string));                

                                                                                    
      
    GetTotalUsage(result)
         
      }


    const GetTotalUsage=(result:any)=>{
        let total:number=0;
        result.forEach((element: { aiResponse: string | any[] })=>{
            total=total+Number(element.aiResponse?.length)
        });
        setTotalUsage(total)

    }


  return (
    <div className='m-5'>
        <div className='bg-white text-slate-800 rounded-lg p-3 border shadow-md'>
            <h2>
                Credits
            </h2>
            <div className='h-2 bg-slate-400 border-2 w-full rounded-full mt-3'>
                <div className='h-1 bg-slate-500 rounded-full' style={{
                        width:(totalUsage/100000)*100+"%"
                     } }>
                    
                </div>
            </div>
            <h2 className='text-sm my-1'>{totalUsage}/1,00,000 Credit used</h2>
        </div>
        <Button variant={'secondary'} className='w-full my-3 text-slate-800 bg-white shadow-md hover:shadow-lg hover:bg-white '>Upgrade</Button>
    </div>
  )
}

export default UsageTrack
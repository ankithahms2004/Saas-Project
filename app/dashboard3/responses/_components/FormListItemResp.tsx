"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { userResponses } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import * as XLSX from 'xlsx';

const FormListItemResp = ({jsonForm,formRecord}:any) => {
    let jsonData:any = []
    const [loading,setLoading] = useState<any>(false)
    const ExportData=async()=>{
        setLoading(true)
        const result = await db.select().from(userResponses).where(eq(userResponses.formRef,formRecord.id))
        console.log(result)
        if(result){
            result.forEach((item:any)=>{
                const jsonItem = JSON.parse(item.jsonResponse)
                jsonData.push(jsonItem)
            })
        }
        console.log(jsonData)
        setLoading(false)
        ExportToExceel(jsonData)
    }

    const ExportToExceel = (jsonData:any)=>{
        const worksheet = XLSX.utils.json_to_sheet(jsonData)
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook,worksheet,"sheet1");
        XLSX.writeFile(workbook,"DataSheet.xlsx")
    }
  return (
    <div className='border shadow-md p-4 rounded-lg my-5'>
   <h2 className='font-semibold text-slate-900 text-lg'> {jsonForm?.formTitle}</h2>
   <h2 className='text-sm text-slate-600'> {jsonForm?.formHeading || jsonForm?.formSubheading}</h2>
   <hr className='my-4'></hr>
   <div className='flex gap-2 justify-between'>
    <h2 className='text-sm'><strong>Responses</strong></h2>
    <Button disabled={loading} onClick={()=>ExportData()} className='rounded-xl bg-white shadow-md hover:shadow-lg hover:bg-white' size="sm">{loading?<Loader2 className='animate-spin'/>:"Export"}</Button>
   </div>
</div>
  )
}

export default FormListItemResp
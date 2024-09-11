import { Button } from '@/components/ui/button'
import { Edit, Share, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { useUser } from '@clerk/nextjs'
import { db } from '@/utils/db'
import { JsonForms } from '@/utils/schema'
import { and, eq } from 'drizzle-orm'
import { RWebShare } from "react-web-share";

  

const FormListItem = ({jsonForm,formRecord,refreshData}:any) => {

    const {user} = useUser()
    const onDeleteForm = async()=>{
        const result = await db.delete(JsonForms).where(and(eq(JsonForms?.id,formRecord?.id),
    eq(JsonForms?.createdBy,user?.primaryEmailAddress?.emailAddress as string)))
    if(result){
        alert("Form Deleted Successfully !");
        refreshData()
    }
    }
  return (
    <div className='border shadow-md p-4 rounded-lg'>
        <div className='flex justify-between'>
            <h2></h2>
            <AlertDialog>
        <AlertDialogTrigger>
       <Trash className='h-5 w-5 cursor-pointer'/>
       </AlertDialogTrigger>
       <AlertDialogContent className='bg-white'>
        <AlertDialogHeader>
         <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
         <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
          <AlertDialogFooter>
          <AlertDialogCancel className='rounded-xl bg-white shadow-md border-none hover:shadow-lg'>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={()=>onDeleteForm()} className='rounded-xl bg-white shadow-md hover:shadow-lg hover:bg-white'>Continue</AlertDialogAction>
         </AlertDialogFooter>
         </AlertDialogContent>
         </AlertDialog>

        </div>
       <h2 className='font-semibold text-slate-900 text-lg'> {jsonForm?.formTitle}</h2>
       <h2 className='text-sm text-slate-600'> {jsonForm?.formHeading || jsonForm?.formSubheading}</h2>
       <hr className='my-4'></hr>
       <div className='flex gap-2 justify-between'>

        <RWebShare
        data={{
          text: jsonForm?.formHeading || jsonForm?.formSubheading+'Build your form in seconds with AI form builder',
          url: "https://saas-project-bice-two.vercel.app/dashboard3/aiform/"+formRecord?.id,
          title: jsonForm?.formTitle,
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <Button className='bg-white shadow-md hover:shadow-lg hover:bg-white rounded-2xl' size="sm"><Share className='h-5 w-5'/>Share</Button>
       
      </RWebShare>
        <Link href={'/dashboard3/edit-form/'+formRecord?.id}>
        <Button className='bg-white shadow-md hover:shadow-lg hover:bg-white rounded-2xl' size="sm"><Edit className='h-5 w-5'/>Edit</Button></Link>
       </div>
    </div>
  )
}

export default FormListItem
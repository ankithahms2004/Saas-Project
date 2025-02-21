"use client";
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'

import Link from 'next/link'

import { Loader2 } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea';
import { chatSession } from '@/utils/GeminiAIModal';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { JsonForms } from '@/utils/schema';
import moment from 'moment';
import { useRouter } from 'next/navigation';


const CreateForm = () => {
    const [openDialog,setOpenDialog]=useState(false);
    const [loading,setLoading]=useState(false);
    const [userInput,setUserInput]=useState<any>();
    const {user} = useUser();
    const router = useRouter();

    const onCreateForm=async()=>{
        
        setLoading(true)
        const result = await chatSession.sendMessage("Description:"+userInput+",On the basis of description please give form in json format with formtitle,formheading along with form having Form field,fieldName,fieldTitle,placeholderName,and formLabel,fieldType,field required in Json format")
        console.log(result.response.text());
        if(result.response.text()){
            const resp = await db.insert(JsonForms).values({
                jsonform:result.response.text(),
                createdBy:user?.primaryEmailAddress?.emailAddress,
                createdAt:moment().format('DD/MM/yyyy'),
            }).returning({id:JsonForms.id});
            console.log(resp[0].id)
            if(resp[0].id){
                router.push('/dashboard3/edit-form/'+resp[0].id)
            }
            setLoading(false)
        }
        setLoading(false)
   }
  return (
    <div>
        <Button onClick={()=>setOpenDialog(true)} className='bg-white mt-5 shadow-md hover:shadow-lg hover:bg-white rounded-2xl'>+ Create Form</Button>
        <Dialog open={openDialog} >
            
  <DialogContent className="bg-white max-w-2xl">
    <DialogHeader>
      <DialogTitle>Create New Form</DialogTitle>
      <DialogDescription>
        
        <Textarea className="rounded-full border-2" placeholder="write a description of your form" required onChange={(event)=>setUserInput(event.target.value)}/>
      </DialogDescription>
      <div className='flex justify-end gap-5'>
        <Button onClick={()=>setOpenDialog(false)} className='bg-white shadow-md  hover:shadow-lg hover:bg-white rounded-2xl'>Cancel</Button>
       <Link href={''}><Button disabled={loading} onClick={()=>onCreateForm()} className='bg-white shadow-md hover:shadow-lg hover:text-white hover:bg-primary rounded-2xl'>{loading?
                    <Loader2 className='animate-spin' /> :'Create'   
                }
                   </Button></Link>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default CreateForm
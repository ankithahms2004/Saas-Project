"use client"
import React,{useState} from 'react'
import {Loader2, PlusSquare } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { useUser } from '@clerk/nextjs'

import { useRouter } from 'next/navigation'
import Link from 'next/link'




const AddResume = () => {

    const [openDialog,setOpenDialog]=useState(false)
    const [resumeTitle,setResumeTitle]=useState();
    const [loading,setLoading]=useState(false);
    const {user}=useUser();
    const router = useRouter();

    const onCreate= async ()=>{
        setLoading(true)
        setLoading(false)
    }

  return (
    <div>
    <div className='p-14 py-24 border 
        items-center flex shadow-md
        justify-center bg-secondary
        rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-lg
        cursor-pointer border-dashed' onClick={()=>setOpenDialog(true)} >
        <PlusSquare/>
    </div>
    <Dialog open={openDialog}>
  <DialogContent className="bg-white max-w-2xl">
    <DialogHeader>
      <DialogTitle>Create New Resume</DialogTitle>
      <DialogDescription>
        <p>Add a title for your new resume</p>
        <Input className='my-2' placeholder='Ex.Full Stack resume' onChange={(e:any)=>setResumeTitle(e.target.value)}/>
      </DialogDescription>
      <div className='flex justify-end gap-5'>
        <Button onClick={()=>setOpenDialog(false)} className='bg-white shadow-md  hover:shadow-lg hover:bg-white rounded-2xl'>Cancel</Button>
       <Link href={{pathname:'/dashboard2/resume/'+resumeTitle+'/edit',query:{title:resumeTitle},}}><Button disabled={!resumeTitle||loading}  onClick={()=>onCreate()} className='bg-white shadow-md hover:shadow-lg hover:text-white hover:bg-primary rounded-2xl'>{loading?
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

export default AddResume

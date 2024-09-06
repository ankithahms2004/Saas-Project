import { Button } from '@/components/ui/button'
import { Loader2Icon, MoreVertical, Notebook } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
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
import GlobalApi from '../_service/GlobalApi'



const ResumeCardItem = ({resume,refreshData}:any) => {
  const [openAlert,setOpenAlert]=useState<any>(false);
  const [loading,setLoading]=useState<any>(false);

  const onDelete = ()=>{
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.documentId).then(resp=>{
      
      refreshData()
      setLoading(false);
      setOpenAlert(false);
    },(error)=>{
      setLoading(false);
    })

  }
  return (
    <div>
    <Link href={'/dashboard2/resume/'+resume.documentId+"/edit"}>
    <div className='p-14 py-24 border 
        items-center flex shadow-md
        justify-center bg-secondary
        rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-lg
        cursor-pointer border-dashed'>
          <div className='flex 
        items-center justify-center h-[180px] '> <Notebook/></div>
    </div>
    </Link>
    <div className='border p-3 text-black rounded-b-lg shadow-lg'>
      <h2 className='text-sm'>{resume.title}</h2>
      <div className='flex justify-evenly flex-wrap'>
      <Link href={'/dashboard2/resume/'+resume.documentId+'/edit'}><Button className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'>Edit</Button></Link>
      <Link href={'/dashboard2/my-resume/'+resume.documentId+'/view'}><Button className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'>View</Button></Link>
      <Link href={'/dashboard2/my-resume/'+resume.documentId+'/view'}><Button className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'>Download</Button></Link>
      <Button onClick={()=>setOpenAlert(true)} className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'>Delete</Button>
      </div>
    </div>
    <AlertDialog open={openAlert}>
  
  <AlertDialogContent className="bg-white max-w-2xl">
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
    <Button onClick={()=>setOpenAlert(false)} className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'>Cancel</Button>

    <Button onClick={onDelete} className='gap-4 bg-white shadow-md rounded-xl justify-end hover:text-white hover:bg-primary hover:shadow-lg' disabled={loading}>
    {loading? <Loader2Icon className='animate-spin'/>:'Delete'}</Button>

    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </div>
  )
}

export default ResumeCardItem
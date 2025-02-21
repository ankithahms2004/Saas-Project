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
import { db } from '@/utils/db';
import { resumeInfomation } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment';
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { PgColumn } from 'drizzle-orm/pg-core'




const AddResume = () => {

    const [openDialog,setOpenDialog]=useState(false)
    const [resumeTitle,setResumeTitle]=useState<any>();
    const [id, setId] = useState<any>()
    const [loading,setLoading]=useState(false);
    const {user}=useUser();
    const router = useRouter();
   

    const onCreate= async ()=>{
        setLoading(true)
        const resp = await db.insert(resumeInfomation).values({
                        Jobtitle:resumeTitle as unknown as string,
                        createdBy:user?.primaryEmailAddress?.emailAddress as string,
                        createdAt:moment().format('DD/MM/yyyy'),
                    }).returning({id:resumeInfomation.id});
                    console.log(resp[0].id)
                    if (resp[0].id && resumeTitle) {
                      setId(resp[0].id)
                      // const queryParams = new URLSearchParams({ 
                      //   id: resp[0].id.toString(),
                      //   title: resumeTitle
                      // }).toString();
                      // router.push(`/dashboard2/resume/?${queryParams}/edit`);
                    }
                    // setLoading(false)
        setLoading(false)
    }

  return (
    <div>
    <div className='p-14 py-20 border 
        items-center flex shadow-md
        justify-center bg-secondary
        rounded-lg h-[200px]
        hover:scale-105 transition-all hover:shadow-lg
        cursor-pointer text-center w-40 border-dashed' onClick={()=>setOpenDialog(true)} >
        <PlusSquare/>
    </div>
    <Dialog open={openDialog}>
  <DialogContent className="bg-white max-w-2xl">
    <DialogHeader>
      <DialogTitle>Create New Resume</DialogTitle>
      <DialogDescription>
        <p>Add a title for your new resume</p>
        <Input className='my-2 border-2' placeholder='Ex.Full Stack resume' onChange={(e:any)=>setResumeTitle(e.target.value)}/>
      </DialogDescription>
      <div className='flex justify-end gap-5'>
        <Button onClick={()=>setOpenDialog(false)} className='bg-white shadow-md  hover:shadow-lg hover:bg-white rounded-2xl'>Cancel</Button>
       <Link href={{pathname:'/dashboard2/resume/'+resumeTitle+'/edit',query:{title:resumeTitle,id: id}}}>
       <Button disabled={!resumeTitle||loading}  onClick={()=>onCreate()} className='bg-white shadow-md hover:shadow-lg hover:text-white hover:bg-primary rounded-2xl'>
        {loading?
                    <Loader2 className='animate-spin' /> :'Create'   
                }
                   </Button>
                   </Link>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddResume

import { ResumeInfoContext } from '@/app/dashboard2/_context/ResumeInfoContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import { useUser } from '@clerk/nextjs';
import { resumeInfomation } from '@/utils/schema'
import { LoaderCircle } from 'lucide-react'
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'



const Skills = ({enabledNext}:any) => {
    const {user} = useUser();
    const [skillsList,setSkillsList]=useState<any>([{
        name:'',
    }])
    const {resumeId}=useParams();
    const [loading,setLoading]=useState(false);
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);

    const AddNewSkills = ()=>{
        setSkillsList([...skillsList,{
            name:'',
        }])
    }
     
    const RemoveSkills = ()=>{
        setSkillsList((skillsList: string | any[])=>skillsList.slice(0,-1))
    }
    const handleChange=(index:any,event:any,)=>{
        const newEntries:any=skillsList.slice();
        const {name,value}=event.target;
        newEntries[index][name]=value;
        setSkillsList(newEntries);
        console.log(setSkillsList)
    }

    useEffect(()=>{
        resumeInfo&&setSkillsList(resumeInfo?.skills)
      },[])

    useEffect(()=>{
        setResumeInfo({
            ...resumeInfo,
            skills:skillsList
        })
    },[skillsList])
    const HandleDownload=()=>{
        window.print();
     }

     const handleInputChange= async()=>{
            setLoading(true)
            const result = await db.update(resumeInfomation).set({
            skills:skillsList,
            }).where(eq(resumeInfomation.createdBy,user?.primaryEmailAddress?.emailAddress as string))
                                 
            console.log(result)
            setLoading(false)
            // window.location.reload();
        }
   
  return (
    <>
    
    <Button onClick={HandleDownload}
            className='gap-4 bg-white flex shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg '
            size="sm"
            
          >
            Download
          </Button>
  
        <div id='no-print' className='p-5 shadow-lg rounded-lg border-t-secondary border-t-4 mt-10'>
         <h2 className='font-bold text-lg'>Skills</h2>
         <p>Add your top skills</p>
         
        <div>
            {skillsList.map((item:any,index:any)=>(
                <div key={index} className='flex justify-between mb-2 border rounded-lg p-3 '>
                    <div>
                    <label className='text-xs'>Name</label>
                    <Input name="name" className='rounded-xl hover:shadow-md' 
                    defaultValue={item.name}
                    onChange={(event)=>handleChange(index,event)} 
                    />
                    </div>
                </div>
            ))}
         </div>
         <div className='flex justify-between'>
            <div className='flex gap-2'>
            <Button onClick={AddNewSkills} className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'> + Add New Skills</Button>
            <Button onClick={RemoveSkills} className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'> - Remove</Button>

            </div>
            <div className='mt-3 flex justify-end'>
                        <Button onClick={()=>handleInputChange()} className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg' type="submit"
                        disabled={loading}>
                            {loading?<LoaderCircle className='animate-spin' />:'Save'}
                            </Button>
                    </div>
           
        </div>
         </div>
         </>
  )
}

export default Skills
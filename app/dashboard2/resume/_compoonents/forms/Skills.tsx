import { ResumeInfoContext } from '@/app/dashboard2/_context/ResumeInfoContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { LoaderCircle } from 'lucide-react'
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'



const Skills = ({enabledNext}:any) => {
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

   
  return (
    <>
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
           
        </div>
         </div>
         </>
  )
}

export default Skills
import { ResumeInfoContext } from '@/app/dashboard2/_context/ResumeInfoContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { LoaderCircle } from 'lucide-react'
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'


const Education = ({enabledNext}:any) => {
    const [loading,setLoading]=useState(false);
  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
  const params=useParams();
    const [educationalList,setEducationalList] = useState<any>([{
        universityName:'',
        degree:'',
        major:'',
        startDate:'',
        endDate:'',
        description:''
      }])

      useEffect(()=>{
        resumeInfo&&setEducationalList(resumeInfo?.education)
      },[])

      const AddNewEducation=()=>{
        setEducationalList([...educationalList,
          {
            universityName:'',
            degree:'',
            major:'',
            startDate:'',
            endDate:'',
            description:''
          }
        ])
      }

      const RemoveEducation=()=>{
        setEducationalList((educationalList: string | any[])=>educationalList.slice(0,-1))
    
      }

      useEffect(()=>{
        setResumeInfo({
          ...resumeInfo,
          education:educationalList
        })
      },[educationalList])

      const handleChange=(event:any,index:any)=>{
        const newEntries=educationalList.slice();
        const {name,value}=event.target;
        newEntries[index][name]=value;
        setEducationalList(newEntries);
      }

      
  return (
    <div>
        <div className='p-5 shadow-lg rounded-lg border-t-secondary border-t-4 mt-10'>
         <h2 className='font-bold text-lg'>Education</h2>
         <p>Add your educational details</p>
         </div>
         <div>
      {educationalList.map((item:any,index:any)=>(
        <div>
          <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
            <div className='col-span-2'>
              <label>University Name</label>
              <Input className='rounded-xl hover:shadow-md' name="universityName" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.universityName}
              />
            </div>
            <div>
              <label>Degree</label>
              <Input className='rounded-xl hover:shadow-md' name="degree" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.degree} />
            </div>
            <div>
              <label>Major</label>
              <Input className='rounded-xl hover:shadow-md' name="major" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.major} />
            </div>
            <div>
              <label>Start Date</label>
              <Input className='rounded-xl hover:shadow-md' type="date" name="startDate" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.startDate} />
            </div>
            <div>
              <label>End Date</label>
              <Input className='rounded-xl hover:shadow-md' type="date" name="endDate" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.endDate} />
            </div>
            <div className='col-span-2'>
              <label>Description</label>
              <Textarea className='rounded-xl hover:shadow-md h-32' name="description" 
              onChange={(e)=>handleChange(e,index)}
              defaultValue={item?.description} />
            </div>

          </div>
       
        </div>
      ))}
    </div>
    <div className='flex justify-between'>
            <div className='flex gap-2'>
            <Button onClick={AddNewEducation} className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'> + Add More Education</Button>
            <Button onClick={RemoveEducation} className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'> - Remove</Button>

            </div>
            
        </div>
    </div>
  )
}

export default Education
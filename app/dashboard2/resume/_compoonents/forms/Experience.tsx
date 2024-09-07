import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useContext, useEffect, useState } from 'react'
import RichTextEditor from '../RichTextEditor';
import { ResumeInfoContext } from '@/app/dashboard2/_context/ResumeInfoContext';
import { LoaderCircle } from 'lucide-react';

import { useParams } from 'next/navigation';





const formField={
    title:'',
    companyName:'',
    city:'',
    state:'',
    startDate:'',
    endDate:'',
    workSummery:'',

}


const Experience = ({enabledNext}:any) => {
    const [experienceList, setExperienceList] = useState<any>([{
        title: '',
        companyName: '',
        city: '',
        state: '',
        startDate: '',
        endDate: '',
        workSummery: '',
    }])
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
    const [loading,setLoading]=useState(false);
   
    const params = useParams();

    const AddNewExperience=()=>{
    
        setExperienceList([...experienceList,{
            title:'',
            companyName:'',
            city:'',
            state:'',
            startDate:'',
            endDate:'',
            workSummery:'',
        }])
    }

   

    const RemoveExperience=()=>{
        setExperienceList((experienceList: string | any[])=>experienceList.slice(0,-1))
    }

   

    const handleChange=(index:any,event:any)=>{
        const newEntries=experienceList.slice();
        const {name,value}=event.target;
        newEntries[index][name]=value;
       
        setExperienceList(newEntries);
    }

    const handleRichTextEditor=(e:any,name:any,index:any)=>{
        enabledNext(true)
        const newEntries=experienceList.slice();
        newEntries[index][name]=e.target.value;
       
        setExperienceList(newEntries);
    }
    


    useEffect(()=>{
    
        setResumeInfo({
            ...resumeInfo,
            experience:experienceList
        });
    //  console.log(experienceList[1].title)
    },[experienceList]);

    
    


  return (
    <div>
        <div className='p-5 shadow-lg rounded-lg border-t-secondary border-t-4 mt-10'>
         <h2 className='font-bold text-lg'>Proffesional Experience</h2>
         <p>Add your previous Job experience</p>
         <div>
            {experienceList.map((item:any,index:any)=>(
                <div key={index}>
                    <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                    <div>
                            <label className='text-xs'>Position Title</label>
                            <Input className='rounded-xl hover:shadow-md' name="title" 
                            onChange={(event)=>handleChange(index,event)}
                            defaultValue={item?.title}
                            />
                        </div>
                        <div>
                            <label className='text-xs'>Company Name</label>
                            <Input className='rounded-xl hover:shadow-md' name="companyName" 
                            onChange={(event)=>handleChange(index,event)}
                            defaultValue={item?.companyName} />
                        </div>
                        <div>
                            <label className='text-xs'>City</label>
                            <Input className='rounded-xl hover:shadow-md' name="city" 
                            onChange={(event)=>handleChange(index,event)} 
                            defaultValue={item?.city}/>
                        </div>
                        <div>
                            <label className='text-xs'>State</label>
                            <Input className='rounded-xl hover:shadow-md' name="state" 
                            onChange={(event)=>handleChange(index,event)}
                            defaultValue={item?.state}
                             />
                        </div>
                        <div>
                            <label className='text-xs'>Start Date</label>
                            <Input className='rounded-xl hover:shadow-md' type="date"  
                            name="startDate" 
                            onChange={(event)=>handleChange(index,event)} 
                            defaultValue={item?.startDate}/>
                        </div>
                        <div>
                            <label className='text-xs'>End Date</label>
                            <Input className='rounded-xl hover:shadow-md' type="date" name="endDate" 
                            onChange={(event)=>handleChange(index,event)} 
                            defaultValue={item?.endDate}
                            />
                        </div>
                        <div className='col-span-2'>
                       <RichTextEditor title={experienceList[index].title} defaultValue={item?.workSummery} index={index} onRichTextEditorChange={(event:any)=>handleRichTextEditor(event,'workSummery',index)} />
                       </div>
                    </div>
                </div>
            ))}
         </div>
         
        <div className='flex justify-between'>
          
        <div className='flex gap-2'>
         <Button  onClick={AddNewExperience} className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'>+ Add More Experience</Button>
         <Button  onClick={RemoveExperience} className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'>Remove</Button>
            </div>
            
         </div>
    </div>
    {/* <div>
                        <Editor initialValue="Your result will appear here!"
    height="600px"
    initialEditType="wysiwyg"
    useCommandShortcut={true} />
    </div> */}
    </div>
  )
}

export default Experience
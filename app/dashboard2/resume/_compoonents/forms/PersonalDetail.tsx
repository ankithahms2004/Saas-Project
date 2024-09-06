import { ResumeInfoContext } from '@/app/dashboard2/_context/ResumeInfoContext'
import GlobalApi from '@/app/dashboard2/_service/GlobalApi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { LoaderCircle } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'



const PersonalDetail = ({enabledNext}:any) => {
    const params=useParams();
    // console.log(params.resumeId)
    const {resumeInfo,setResumeInfo} = useContext(ResumeInfoContext)
    const [formData,setFormData]=useState<any>();
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        console.log("---",params)
       
    },[])

    const handleInputChange=(e:any)=>{
        enabledNext(false)
        const {name,value}=e.target;

        setFormData({
            ...formData,
            [name]:value
        })
        setResumeInfo({
            ...resumeInfo,
            [name]:value
        })
        // console.log(resumeInfo.address)
    }
        const onSave=async(e:any)=>{
            e.preventDefault();
            setLoading(true)
            const data={
                data:formData
            }
            GlobalApi.UpdateResumeDetail(params?.resumeId,data).then((resp:any)=>{
                console.log(resp);
                setLoading(false);
                enabledNext(true);
                
                
            },(error)=>{
                console.log(error)
                setLoading(false);
            })

        }
    
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-secondary border-t-4 mt-10'>
         <h2 className='font-bold text-lg'>Personal Detail</h2>
         <p>Get Started with the basic information</p>
         <form onSubmit={onSave}>
            <div className='grid grid-cols-2 rounded-md mt-5 gap-3'>
                <div>
                    <label className='text-sm'>First Name</label>
                    <Input className='rounded-xl hover:shadow-md' name="firstName" defaultValue={resumeInfo?.firstName} required onChange={handleInputChange}  />
                </div>
                <div>
                    <label className='text-sm'>Last Name</label>
                    <Input className='rounded-xl hover:shadow-md' name="lastName" required onChange={handleInputChange} 
                    defaultValue={resumeInfo?.lastName}
                     />
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Job Title</label>
                    <Input className='rounded-xl hover:shadow-md' name="jobTitle" required 
                    defaultValue={resumeInfo?.jobTitle}
                    onChange={handleInputChange}  />
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Address</label>
                    <Input className='rounded-xl hover:shadow-md' name="address" required 
                    defaultValue={resumeInfo?.address}
                    onChange={handleInputChange}  />
                </div>
                <div>
                    <label className='text-sm'>Phone</label>
                    <Input className='rounded-xl hover:shadow-md' name="phone" required 
                    defaultValue={resumeInfo?.phone}
                    onChange={handleInputChange}  />
                </div>
                <div>
                    <label className='text-sm'>Email</label>
                    <Input className='rounded-xl hover:shadow-md' name="email" required 
                    defaultValue={resumeInfo?.email}
                    onChange={handleInputChange}  />
                </div>
            </div>
            <div className='mt-3 flex justify-end'>
                <Button className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg' type="submit"
                disabled={loading}>
                    {loading?<LoaderCircle className='animate-spin' />:'Save'}
                    </Button>
            </div>
        </form>
    </div>
  )
}

export default PersonalDetail
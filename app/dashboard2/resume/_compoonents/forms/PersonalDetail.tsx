import { ResumeInfoContext } from '@/app/dashboard2/_context/ResumeInfoContext'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { LoaderCircle } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import { db } from '@/utils/db';
import { resumeInfomation } from '@/utils/schema'
import { eq } from 'drizzle-orm';
import { useUser } from '@clerk/nextjs';



const PersonalDetail = ({enabledNext}:any) => {
    const params=useParams();
   
    const {resumeInfo,setResumeInfo} = useContext(ResumeInfoContext)
    const [formData,setFormData]=useState<any>();
    const [formList,setFormList] = useState<any>([])
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [jobTitle,setJobTitlet] = useState();
    const [address,setAddress] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();
    const {user} = useUser();

    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        console.log("---",params)
       
    },[])

    const handleInputChange= async()=>{
        setLoading(true)
        const result = await db.update(resumeInfomation).set({
            firstName:firstName,
            lastName:lastName,
            title:jobTitle,
            address:address,
            phone:phone,
            email:email
              }).where(eq(resumeInfomation.createdBy,user?.primaryEmailAddress?.emailAddress as string))
              
        console.log(result)
        setLoading(false)
        window.location.reload();
        }


          
          useEffect(()=>{
            user&&GetformList()
          },[user])
          const GetformList = async()=>{
          const result = await db.select({
            firstName: resumeInfomation?.firstName,
            lastName: resumeInfomation?.lastName,
            address: resumeInfomation?.address,
            phone: resumeInfomation?.phone,
            email: resumeInfomation?.email,
            jobTitle: resumeInfomation?.title
          }).from(resumeInfomation).where(eq(resumeInfomation.createdBy,user?.primaryEmailAddress?.emailAddress as string))
          console.log(result);
          setFormList(result)
        }





        // e.preventDefault();
        // const {name,value}=e.target;

        // setFormData({
        //     ...formData,
        //     [name]:value
        // })
        // setResumeInfo({
        //     ...resumeInfo,
        //     [name]:value
        // })
        
    
       
    
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-secondary border-t-4 mt-10'>
         <h2 className='font-bold text-lg'>Personal Detail</h2>
         <p>Get Started with the basic information</p>
         <p>(you can use the sample template that is provided)</p>
         <form>
            <div className='grid grid-cols-2 rounded-md mt-5 gap-3'>
                <div>
                    <label className='text-sm'>First Name</label>
                    <Input className='rounded-xl hover:shadow-md' name="firstName" defaultValue={formList[0]?.firstName} required onChange={(e:any)=>setFirstName(e.target.value)} />
                </div>
                <div>
                    <label className='text-sm'>Last Name</label>
                    <Input className='rounded-xl hover:shadow-md' name="lastName" required onChange={(e:any)=>setLastName(e.target.value)} 
                    defaultValue={formList[0]?.lastName}
                     />
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Job Title</label>
                    <Input className='rounded-xl hover:shadow-md' name="jobTitle" required 
                    defaultValue={formList[0]?.jobTitle}
                    onChange={(e:any)=>setJobTitlet(e.target.value)}  />
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Address</label>
                    <Input className='rounded-xl hover:shadow-md' name="address" required 
                    defaultValue={formList[0]?.address}
                    onChange={(e:any)=>setAddress(e.target.value)} />
                </div>
                <div>
                    <label className='text-sm'>Phone</label>
                    <Input className='rounded-xl hover:shadow-md' name="phone" required 
                    defaultValue={formList[0]?.phone}
                    onChange={(e:any)=>setPhone(e.target.value)}  />
                </div>
                <div>
                    <label className='text-sm'>Email</label>
                    <Input className='rounded-xl hover:shadow-md' name="email" required 
                    defaultValue={formList[0]?.email}
                    onChange={(e:any)=>setEmail(e.target.value)}  />
                </div>
            </div>
            <div className='mt-3 flex justify-end'>
                
            </div>
            <div className='mt-3 flex justify-end'>
                <Button onClick={()=>handleInputChange()} className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg' type="submit"
                disabled={loading}>
                    {loading?<LoaderCircle className='animate-spin' />:'Save'}
                    </Button>
            </div>
        </form>
    </div>
  )
}

export default PersonalDetail
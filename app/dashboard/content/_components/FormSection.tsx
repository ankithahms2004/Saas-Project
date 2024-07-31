"use client"
import React, { useState } from 'react';
import { TEMPLATE } from '../../_components/TemplateSection';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS{
    selectedTemplate?:TEMPLATE;
    userFormInput:any,
    loading:boolean
}

const FormSection = ({selectedTemplate,userFormInput,loading}:PROPS) => {
const [formData,setFormData]=useState<any>();
     const handleInputChange=(event:any)=>{
        const {name,value}=event.target;
        setFormData({...formData,[name]:value})
     }
    const onSubmit=(e:any)=>{
        e.preventDefault();
        userFormInput(formData)
    }
  return (
    <>
    <div className='p-5 shadow border rounded-lg'>
    
        {/*@ts-ignore */}
        <Image src={selectedTemplate?.icon} alt='icon' width={70} height={70}/>
        <h2 className='font-bold text-2xl mb-2 text-slate-700'>{selectedTemplate?.name}</h2>
        <p className='text-slate-500 text-sm'>{selectedTemplate?.desc}</p>


        <form onSubmit={onSubmit} className='mt-6'>
            {selectedTemplate?.form?.map((item,index)=>(
                <div key={index} className='my-2 flex flex-col border-slate-900 rounded gap-2 mb-7'>
                    <label className='font-semibold text-slate-700'>{item.label}</label>
                    {item.field=='input'?
                    <Input name={item.name} required={item?.required} onChange={handleInputChange} className='rounded shadow-md border-slate-400 hover:shadow hover:border-2'/>
                :item.field=='textarea'?
            <Textarea name={item.name} required={item?.required} onChange={handleInputChange} className='rounded shadow-md border-slate-400 hover:shadow hover:border-2'/>   : null}
                </div>
            ))}
            <Button type='submit' disabled={loading} className='rounded py-6 w-full shadow bg-white hover:bg-white hover:shadow-lg'>{loading&&<Loader2Icon className='animate-spin'/>}Generate Content</Button>
        </form>

    </div>
    </>
  )
}

export default FormSection
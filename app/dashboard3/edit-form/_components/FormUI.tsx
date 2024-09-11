"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radiogroup"
import { Checkbox } from "@/components/ui/checkbox"



import { Input } from '@/components/ui/input'
import React, { useRef, useState } from 'react'
import FieldEdit from "./FieldEdit"
import { Button } from "@/components/ui/button"
import { db } from "@/utils/db"
import { userResponses } from "@/utils/schema"
import moment from "moment"
import { SignInButton, useUser } from "@clerk/nextjs"

const FormUi = ({jsonForm,onFieldUpdate,deleteField,editable=true,formId=0}:any) => {
        const [formData,setFormData] = useState<any>()
        const {user,isSignedIn} = useUser()
        let formRef = useRef<HTMLFormElement>(null)
      const handleInputChange = (event:any)=>{
       
        const {name,value} = event.target;
        setFormData({
          ...formData,
          [name]:value
        })
      }
  
      const onFormSubmit = async(event:any)=>{
        event.preventDefault()
        console.log(formData)

        const result = await db.insert(userResponses).values({
          jsonResponse:formData,
          createdAt:moment().format('DD/MM/yyyy'),
          formRef:formId,
        })
        if(result){
          formRef?.current?.reset();
          alert("Response Submitted Successfully !")
        }else{
          alert("Internal Server Error !")
        }
      }

      const handleSelectChange = (name:any,value:any)=>{
        setFormData({
          ...formData,
          [name]:value
        })
      }

      const handleCheckboxChange = (fieldName:any,itemName:any,value:any)=>{
      
        const list=formData?.[fieldName]?formData?.[fieldName]:[];
        
        if(value){
          list.push({
            label:itemName,
            value:value
          })
          setFormData({
            ...formData,
            [fieldName]:list
          })
        }else{
          const result = list.filter((item:any)=>item.label==itemName);
          setFormData({
            ...formData,
            [fieldName]:result
          })
        }
       
      }


  return (
    <form ref={formRef} onSubmit={onFormSubmit} className='border-slate-950 border-r-8 border-b-4 shadow-md bg-white p-5 md:w-[700px] rounded-2xl'>
      <h2 className='font-bold text-center text-2xl'>{jsonForm?.formTitle}</h2>
      <h2 className='text-sm text-slate-600 text-center'>{jsonForm?.formHeading || jsonForm?.formSubheading}</h2>
     {(jsonForm?.formFields || jsonForm?.form)?.map((field:any,index:any)=>(
        <div key={index} className="flex items-center gap-2">
          
          {field.fieldType=='select' ?
          <div className='my-3 w-full'>
          <label className='text-xs text-slate-700'>{field?.formLabel||field?.label }</label>

          <Select required onValueChange={(v)=>handleSelectChange(field?.fieldName,v)}>
          <SelectTrigger className="w-full">
            <SelectValue className="z-1 bg-white font-bold" placeholder={field?.placeholderName || field?.placeholder} />
          </SelectTrigger>
          <SelectContent className=' bg-white hover:bg-white' >
            {field?.options?.map((item:any,index:any)=>(

            <SelectItem className="z-2 bg-white cursor-pointer hover:bg-white relative" key={index} value={item}>{item}</SelectItem>
            ))
            }
           
          </SelectContent>
        </Select>
        </div>
        :field.fieldType=='radio'?
        <div className="my-3 w-full">
        <label className='text-xs text-slate-700'>{field?.formLabel||field?.label }</label>

        <RadioGroup defaultValue="option-one">
        {field?.options?.map((item:any,index:any)=>(
          <div key={index} className="flex items-center space-x-2">
          <RadioGroupItem required value={item.label} id={item.label} onClick={()=>handleSelectChange(field?.fieldName,item.label)}/>
          <Label htmlFor={item.label}>{item.label}</Label>
      </div>
        ))}
        
        </RadioGroup>

        </div>
        :field.fieldType=='checkbox'?
        <div className="my-3 w-full">
          <label className='text-xs text-slate-700'>{field?.formLabel||field?.label }</label>
          {field?.options?field?.options?.map((item:any,index:any)=>(
            <div key={index} className="flex gap-2 items-center">
              <Checkbox onCheckedChange={(v)=>handleCheckboxChange(field?.formLabel||field?.label ,item?.label,v)} />
              <h2>{item}</h2>
              
          </div>
          ))
        :
        <div className="flex gap-2 items-center">
          <Checkbox required/>
          <h2>{field?.label || field?.formLabel}</h2>
        </div>
        }
        </div>
          :<div className='my-3 w-full'>
            <label className='text-xs text-slate-700'>{field?.formLabel||field?.label }</label>
          <Input required onChange={(e:any)=>handleInputChange(e)} type={field?.fieldType} name={field?.fieldName} placeholder={field?.placeholderName || field?.placeholder}/>
          </div>
}
       {editable&& <div>
          <FieldEdit defaultValue={field}
          onUpdate={(value:any)=>onFieldUpdate(value,index)}
          deleteField = {()=>deleteField(index)}
          />
        </div>
}
        </div>
     ))}
     {isSignedIn?
     <Button type="submit" className='bg-white mt-5 shadow-md hover:shadow-lg hover:bg-white rounded-2xl'>Submit</Button>
     :<Button  className='bg-white mt-5 shadow-md hover:shadow-lg hover:bg-white rounded-2xl'><SignInButton>Sign In befor Submitting</SignInButton></Button>
     }
    </form>
  )
}

export default FormUi
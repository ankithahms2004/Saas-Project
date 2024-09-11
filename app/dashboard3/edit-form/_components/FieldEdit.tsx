import { Edit, Trash } from 'lucide-react'
import React, { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
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
  
  

const FieldEdit = ({defaultValue,onUpdate,deleteField}:any) => {
    const [label,setLabel] = useState(defaultValue?.formLabel)
    const [placeholder,setPlaceholder] = useState(defaultValue?.placeholderName)
  return (
    <div className='flex gap-2 cursor-pointer'>
        
        
        <Popover>
    <PopoverTrigger><Edit className='h-5 w-5 text-slate-600'/></PopoverTrigger>
    <PopoverContent className='bg-white'><h2>Edit Fields</h2>
    <div>
        <label className='text-xs'>Label Name</label>
        <Input type='text' defaultValue={defaultValue?.formLabel || defaultValue?.label}
        onChange={(e:any)=>setLabel(e.target.value)}
        />
    </div>
    <div>
        <label className='text-xs'>Placeholder Name</label>
        <Input type='text' defaultValue={defaultValue?.placeholderName || defaultValue?.placeholder}
        onChange={(e:any)=>setPlaceholder(e.target.value)}
        />
    </div>
    <Button className='bg-white mt-3 shadow-md  hover:shadow-lg hover:bg-white rounded-2xl' size="sm" 
    onClick={()=>onUpdate({
        label:label,
        placeholder:placeholder
    })}>Save</Button>
    </PopoverContent>
         </Popover>
        <AlertDialog>
  <AlertDialogTrigger>
  <Trash className='h-5 w-5 text-slate-600'/> 
  </AlertDialogTrigger>
  <AlertDialogContent className="bg-white">
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel className='rounded-xl bg-white shadow-md border-none hover:shadow-lg'>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={()=>deleteField()} className='rounded-xl bg-white shadow-md hover:shadow-lg hover:bg-white'>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </div>
  )
}

export default FieldEdit
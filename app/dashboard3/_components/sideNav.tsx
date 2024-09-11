"use client";
import {  Home, MessageSquare, Settings } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton} from '@clerk/nextjs';
import Header from './Header';
import { Button } from '@/components/ui/button';

const SideNav = () => {
    const MenuList=[{
        name:'My-Forms',
        icon:Home,
        path:'/dashboard3'
    },
    {
        name:'Responses',
        icon:MessageSquare,
        path:'/dashboard3/responses'
    },
    {
        name:'Setting',
        icon:Settings,
        path:'/dashboard3/settings'
    },
    ]
    const path=usePathname();
useEffect(()=>{
    // console.log(path)
},[])
    
  return (
    <>
    
        {/* <div className='shadow-lg flex justify-between pr-5'>
        <Image src={'/logo.svg'} alt='' className='w-auto h-auto' width={120} height={100}/>
        <UserButton/>
        </div> */}
        <div className='h-screen  relative p-5 shadow-lg border bg-white hover:shadow'>
        <div className='mt-3'>
            {MenuList.map((menu,index)=>(
                <Link href={menu.path}>
                <div key={index} className={`flex gap-2 mb-2 p-3 hover:bg-white hover:shadow hover:underline rounded-lg cursor-pointer items-center ${path==menu.path&&'bg-white rounded shadow'}`}>
                    <menu.icon className='h-6 w-6'/>
                    <h2 className='text-lg'>{menu.name}</h2>
                </div>
                </Link>
            ))}
        </div>
        <div className='bottom-0 mt-28 pt-24 items-center'>
            <Button className='bg-white shadow-md hover:shadow-lg hover:bg-white rounded-2xl'>+ Create new Form</Button>
        </div>
        </div> 
        
    </>
    
  )
}

export default SideNav
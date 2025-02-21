"use client";
import { UserButton } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const Header = () => {
   const path = usePathname()
   useEffect(()=>{
    console.log(path)
   })
  return !path.includes('aiform')&&(
    
    <div>
        <div id='no-print' className='shadow-lg bg-slate-50 p-2 flex justify-between pr-5'>
        <Image src={'/logo.svg'} alt='logo' width={160} height={100} className='p-3'/>
        <h1 className='hidden md:flex gap-2 items-center font-bold text-slate-800'>Explore the Power of AI - 
      <h2 className='hidden md:flex gap-6 items-center font-semibold text-slate-700'> Get your Forms and Responses Created in just seconds...</h2>
        </h1>
        <div className='mt-4 hidden md:flex gap-4 '>
        <Link href={'/dashboard3'}> <Button className='bg-white shadow-md  hover:shadow-lg hover:bg-white rounded-2xl'><h1>Home</h1></Button></Link>
        <Link href={'/dashboard3/responses'}><Button className='bg-white shadow-md  hover:shadow-lg hover:bg-white rounded-2xl'><h1>Responses</h1></Button></Link>
        </div>
        <UserButton/>
    </div>   
    </div>
  )
}

export default Header
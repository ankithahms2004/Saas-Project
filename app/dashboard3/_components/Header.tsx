"use client";
import { UserButton } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';


const Header = () => {
   const path = usePathname()
   useEffect(()=>{
    console.log(path)
   })
  return !path.includes('aiform')&&(
    
    <div>
        <div id='no-print' className='shadow-lg p-1 flex justify-between pr-5'>
        <Image src={'/logo.svg'} alt='logo' width={160} height={100} className='p-3'/>
        <UserButton/>
    </div>   
    </div>
  )
}

export default Header
"use client"
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {
       
    const path=usePathname();
    useEffect(()=>{
     console.log(path)
    },[])   

  return (
    <div className='flex p-4 justify-between bg-slate-50 shadow-lg'>
        <Image src={'/logo.svg'} alt='logo' width={160} height={100} className='p-3'/>
        <h1 className='hidden md:flex gap-2 items-center font-bold text-slate-800'>Explore the Power of AI - 
      <h2 className='hidden md:flex gap-6 items-center font-semibold text-slate-700'> Get your Mock Interviews scheduled in just seconds...</h2>
        </h1>
        
        {/* <ul className='hidden md:flex gap-6 items-center text-slate-800'>
            <li className={`hover:text-slate-700 hover:font-serif transition-all cursor-pointer hover:underline ${path=='/dashboard1'&&'text-slate-700 font-bold'}`}>Dashboard</li>
            <li className={`hover:text-slate-700 hover:font-serif transition-all cursor-pointer hover:underline ${path=='/dashboard1/questions'&&'text-slate-700 font-bold'}`}>Questions</li>
            <li className={`hover:text-slate-700 hover:font-serif transition-all cursor-pointer hover:underline ${path=='/dashboard1/upgrade'&&'text-slate-700 font-bold'}`}>Upgrade</li>
            <li className={`hover:text-slate-700 hover:font-serif transition-all cursor-pointer hover:underline ${path=='/dashboard1/how'&&'text-slate-700 font-bold'}`}>How it works ?</li>
        </ul> */}
        <div className='flex gap-6 items-center'>
          <Link href={'/'}> <Button className='bg-white shadow-md  hover:shadow-lg hover:bg-white rounded-2xl'><h1>Home</h1></Button></Link>

          <UserButton/>
        </div>
    </div>
  )
}

export default Header
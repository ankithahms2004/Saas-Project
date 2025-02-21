"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
// import UsageTrack from './UsageTrack'
import Link from 'next/link'




const Sidenav = () => {
const MenuList=[{
    name:'Home',
    icon:Home,
    path:'/dashboard'
},
// {
//     name:'History',
//     icon:FileClock,
//     path:'/dashboard/history'
// },
// {
//     name:'Billing',
//     icon:WalletCards,
//     path:'/dashboard/billing'
// },
// {
//     name:'Setting',
//     icon:Settings,
//     path:'/dashboard/settings'
// },
]

const path=usePathname();
useEffect(()=>{
    // console.log(path)
},[])


  return (
    <div className='h-screen relative p-5 shadow border bg-white hover:shadow'>
        <div className='flex justify-center'>
        <Image src={'/logo.svg'} alt='' className='w-auto h-auto' width={120} height={100}/>
        </div>
        <hr className='my-6 border'/>
        <div className='mt-10'>
            {MenuList.map((menu,index)=>(
                <Link href={menu.path}>
                <div key={index} className={`flex gap-2 mb-2 p-3 hover:bg-white hover:shadow hover:underline rounded-lg cursor-pointer items-center ${path==menu.path&&'bg-white rounded shadow'}`}>
                    <menu.icon className='h-6 w-6'/>
                    <h2 className='text-lg'>{menu.name}</h2>
                </div>
                </Link>
            ))}
        </div>
        <div className='absolute bottom-10 left-0 w-full'>
            {/* <UsageTrack/> */}
        </div>
    </div>
  )
}

export default Sidenav
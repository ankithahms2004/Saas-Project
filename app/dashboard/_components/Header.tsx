import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow border-b-2 flex bg-slate-50 justify-between items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-lg max-w-sm hover:shadow'>
            <Search/>
            <input type=" text" placeholder='Search...' className='outline-none' />
        </div>
        <div className='flex gap-6 items-center'>
        <Link href={'/'}> <Button className='bg-white shadow-md  hover:shadow-lg hover:bg-white rounded-2xl'><h1>Home</h1></Button></Link>
            <UserButton/>
        </div>
    </div>
  )
}

export default Header
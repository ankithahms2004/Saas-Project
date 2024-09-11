
import { Button } from '@/components/ui/button'
import React from 'react'
import CreateForm from './_components/CreateForm'
import Header from './_components/Header'
import SideNav from './_components/sideNav'
import FormList from './_components/FormList'


const Dashboard = () => {
  return (
    <>
    <div className='md:w-60  hidden md:block fixed '>
         <SideNav/>
    </div>
    <div className='p-10 text-center'>
    <h2 className='font-semibold text-slate-700 text-3xl'>Dashboard
    <CreateForm/>
    </h2>
    <FormList/>
    </div>
    </>
  )
}

export default Dashboard
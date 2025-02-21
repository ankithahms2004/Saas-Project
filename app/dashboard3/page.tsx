
import { Button } from '@/components/ui/button'
import React from 'react'
import CreateForm from './_components/CreateForm'
import Header from './_components/Header'
import SideNav from './_components/sideNav'
import FormList from './_components/FormList'


const Dashboard = () => {
  return (
    <>
    <div className='text-center'>
         {/* <SideNav/> */}
    </div>
    <div className='p-10 text-center'>
    <h2 className='font-semibold text-slate-700 text-3xl'>Dashboard
      <p className='font-semibold text-slate-500 text-sm mt-3'>Note:  Get your desired forms created in just seconds...<br></br>
        Along with the responses in the downloadable excel files
      </p>
    <CreateForm/>
    </h2>
    <FormList/>
    </div>
    </>
  )
}

export default Dashboard
"use client"
import React, { useState } from 'react'
import Sidenav from './_components/Sidenav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
      
    const [totalUsage,setTotalUsage] = useState<Number>(0);
    const [updateCreditUsage,setUpdateCreditUsage] = useState<any>()

  return (
    <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
      <UpdateCreditUsageContext.Provider value={{updateCreditUsage,setUpdateCreditUsage}}>
    <div className='h-screen'>
        <div className='md:w-64  hidden md:block fixed '>
            <Sidenav/>
        </div>
        <div className='md:ml-64 hidden md:block'>
            <Header/>
        {children}
        </div>
        </div>
        </UpdateCreditUsageContext.Provider>
        </TotalUsageContext.Provider>
  )
}

export default layout
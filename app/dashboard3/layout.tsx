import React from 'react'
import SideNav from './_components/sideNav'
import Header from './_components/Header'



const DashboardLayout = ({children}:any) => {
  return (
    <div>
      <div>
      <Header/>
      
      </div>
   
   
    <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateSection from './_components/TemplateSection'

const Dashboard = () => {
  const [userSearchInput,setUserSearchInput]=useState<string>()



  return (
    <div>
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>
      <TemplateSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard
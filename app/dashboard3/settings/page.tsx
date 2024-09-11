import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Settings = () => {
  return (
    <div className='flex justify-center h-full p-5'>
        <UserProfile/>
    </div>
  ) 
}

export default Settings
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

const Dashboard1 = () => {
  return (
    <div className='p-10'>
      <h2 className='text-slate-700 font-bold text-2xl'>
      Dashboard
      </h2>      
      <h2 className='text-slate-600'>Create and Start your AI Mock Interview</h2>  
      <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
        <AddNewInterview/>
      </div>
      <InterviewList/>
    </div>
  )
}

export default Dashboard1
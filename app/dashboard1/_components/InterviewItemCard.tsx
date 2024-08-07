import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const InterviewItemCard = ({interview}:any) => {
    
    const router = useRouter();
    const onStart = ()=>{
        router.push('/dashboard1/Interview/'+interview?.mockId)
    }

    const onFeedback = ()=>{
        router.push('/dashboard1/Interview/'+interview.mockId+"/feedback")
    }
  return (
    <div className='border shadow-lg rounded-lg p-3'>
        <h2 className='font-semibold text-slate-700'>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-slate-600'>{interview.jobExperience} Years of Experience</h2>
        <h2 className='text-xs text-slate-500'>Created At : {interview.createdAt}</h2>
        <div className='flex my-2 justify-between mt-2'>
           <Button onClick={onFeedback} size='sm' className="hover:shadow-xl border rounded-xl hover:bg-white bg-white shadow-lg">Feedback</Button>
            <Button onClick={onStart} size='sm' className="hover:shadow-xl border rounded-xl hover:bg-white bg-white shadow-lg">Start</Button>
        </div>
    </div>
  )
}

export default InterviewItemCard
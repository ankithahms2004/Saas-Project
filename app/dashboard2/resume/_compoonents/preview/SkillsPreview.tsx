import React from 'react'

const SkillsPreview = ({resumeInfo}:any) => {
  return (
    <div>
        <div className='my-6'>
    <h2 className='text-center font-bold text-sm mb-2'>Skills</h2>
    <hr className='border-[1.5px] my-2'/>
    <div className='grid grid-cols-2 gap-3 my-4'>
    {resumeInfo?.skills.map((skill:any,index:any)=>(
            <div key={index} className='flex items-center justify-between'>
                <h2 className='text-xs'><li>{skill.name}</li></h2>
            </div>
        ))}
    </div>
    </div>
    </div>
  )
}

export default SkillsPreview
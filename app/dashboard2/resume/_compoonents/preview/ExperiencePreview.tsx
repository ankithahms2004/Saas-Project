import React from 'react'

const ExperiencePreview = ({resumeInfo}:any) => {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-sm mb-2'>Professional Experience</h2>
        <hr className='border-[1.5px] my-2'/>
        {resumeInfo?.Experience?.map((experience:any,index:any)=>(
            <div key={index} className='my-5'>
                <h2 className='text-sm font-bold'><li>{experience?.title}</li></h2>
                <h2 className='text-xs flex justify-between'>{experience?.companyName}, 
                {experience?.city}, 
                {experience?.state}
                <span>{experience?.startDate} To {experience?.endDate} </span>
                </h2>
                {/* <p className='text-xs my-2'>
                    {experience.workSummery}
                </p> */}
                <div className='text-xs my-2' dangerouslySetInnerHTML={{__html:experience?.workSummery}} />
            </div>
        ))}
    </div>
  )
}

export default ExperiencePreview
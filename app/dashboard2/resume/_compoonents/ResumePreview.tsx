import React, { useContext } from 'react'
import { ResumeInfoContext } from '../../_context/ResumeInfoContext'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummaryPreview from './preview/SummaryPreview'
import ExperiencePreview from './preview/ExperiencePreview'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'

const ResumePreview = () => {

    const {resumeInfo,setResumeInfo} = useContext(ResumeInfoContext)

  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]' >
        <PersonalDetailPreview resumeInfo={resumeInfo}/>
        <SummaryPreview resumeInfo={resumeInfo}/>
        <ExperiencePreview resumeInfo={resumeInfo}/>
        <EducationalPreview resumeInfo={resumeInfo}/>
        <SkillsPreview resumeInfo={resumeInfo}/>
    </div>
  )
}

export default ResumePreview
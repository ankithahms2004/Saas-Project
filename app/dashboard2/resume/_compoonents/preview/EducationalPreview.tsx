import React from 'react'

const EducationalPreview = ({resumeInfo}:any) => {
  return (
    <div>
        <div className='my-6'>
    <h2 className='text-center font-bold text-sm mb-2'>Education</h2>
    <hr className='border-[1.5px] my-2'/>
    {resumeInfo?.education?.map((education:any,index:any)=>(
        <div key={index} className='my-5'>
            <h2 className='text-sm font-bold'><li>{education.universityName}</li></h2>
            <h2 className='text-xs flex justify-between'>{education?.degree} in {education?.major}
            <span>{education?.startDate} - {education?.endDate}</span>
            </h2>
            <p className='text-xs my-2'>
                {education?.description}
            </p>
        </div>
    ))}
    </div>
    </div>
  )
}

export default EducationalPreview



// import React from 'react'

// const EducationalPreview = ({resumeInfo}:any) => {
//   return (
//     <div>
//         <div className='my-6'>
//     <h2 className='text-center font-bold text-sm mb-2'>Education</h2>
//     <hr className='border-[1.5px] my-2'/>
//     {resumeInfo?.universityName?.map((education:any,index:any)=>(
//         <div key={index} className='my-5'>
//             <h2 className='text-sm font-bold'><li>{education.universityName}</li></h2></div>
//     ))}
//     {resumeInfo?.degree?.map((education:any,index:any)=>(
//     <div key={index}>
//           <h2 className='text-xs flex justify-between'>{education?.degree}in {education?.major}</h2>
//               </div> 
//             ))}
//             {resumeInfo?.education?.map((education:any,index:any)=>(
//             <div key={index}>
//               <h2 className='text-xs flex justify-between'>
//             <span>{education?.startDate} - {education?.endDate}</span>
//             </h2>
//             </div>))}
//             {resumeInfo?.education?.map((education:any,index:any)=>(
//             <div key={index}>
//             <p className='text-xs my-2'>
//                 {education?.description}
//             </p>
//             </div>
//              ))}
//     </div>
//     </div>
//   )
// }

// export default EducationalPreview
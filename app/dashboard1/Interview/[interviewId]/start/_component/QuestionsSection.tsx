import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

const QuestionsSection = ({mockInterviewQuestions,activeQuestionIndex}:any) => {

    const textToSpeech = (text:any)=>{
        if('speechSynthesis' in window){
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech)
        }
        else{
            alert('Sorry , Your browser does not support text to Speech');
        }
    }
    // console.log(mockInterviewQuestions)
  return mockInterviewQuestions&&(
    <div className='p-5 border rounded-lg bg-slate-100 shadow-lg my-10'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {mockInterviewQuestions&&mockInterviewQuestions.map((question:string,index:number)=>(
                <h2 className={`p-2 bg-secondary rounded-full shadow-lg text-sm md:text-md text-center cursor-pointer ${activeQuestionIndex==index && 'bg-slate-500 text-white'}`}>Question  #{index+1}</h2>
            ))}
        </div>
        <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestions[activeQuestionIndex]?.question}</h2>
        <Volume2 className='cursor-pointer' onClick={()=>textToSpeech(mockInterviewQuestions[activeQuestionIndex]?.question)}/>.....
           <div className='border rounded-lg p-5 bg-blue-100 border-blue-200 mt-20'>
            <h2 className='flex gap-2 items-center text-primary'>
                <Lightbulb/>
                <strong>Note :</strong>
            </h2>
            <h2 className='text-sm text-slate-600 my-2'>
                {process.env.NEXT_PUBLIC_QUESTION_INFORMATION}
            </h2>
           </div>
    </div>
  )
}

export default QuestionsSection
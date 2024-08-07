"use client";
import { Button } from '@/components/ui/button';
import { Mic, WebcamIcon } from 'lucide-react';
import { useEffect, useState, useRef } from "react";
import Webcam from 'react-webcam';
import useSpeechToText from 'react-hook-speech-to-text';
import { chatSession } from '@/utils/GeminiAIModal';
import { UserAnswer } from '@/utils/schema';
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';


declare global {
    interface Window {
      webkitSpeechRecognition: any;
    }
  }


const RecordAnswerSection = ({mockInterviewQuestions,activeQuestionIndex,interviewData}:any) => {
    
    const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [userAnswer,setUserAnswer] = useState('');
  const [transcript, setTranscript] = useState<any>("");
  const [loading,setLoading] = useState<any>(false);
  const {user}= useUser();

  const recognitionRef = useRef<any>(null);


  const startRecording = () => {
    setIsRecording(true);
    // Create a new SpeechRecognition instance and configure it
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

      // Event handler for speech recognition results
      recognitionRef.current.onresult = (event: any) => {
        const { transcript } = event.results[event.results.length - 1][0];
  
        // Log the recognition results and update the transcript state
        // console.log(event.results);
        setTranscript(transcript);
      };
  
      // Start the speech recognition
      recognitionRef.current.start();
    };
    
    
    useEffect(() => {
        return () => {
          // Stop the speech recognition if it's active
          if (recognitionRef.current) {
            recognitionRef.current.stop();
          }
        };
      }, []);

      useEffect(()=>{
          setUserAnswer(preAns=>preAns+setTranscript)
      },[])

      const stopRecording = () => {
        if (recognitionRef.current) {
          // Stop the speech recognition and mark recording as complete
          recognitionRef.current.stop();
          setRecordingComplete(true);
        }
      };

      const handleToggleRecording = () => {
        setIsRecording(!isRecording);
        if (!isRecording) {
          startRecording();
        } else {
          stopRecording();
        }
      };

      const SaveUserAnswer=async()=>{
        setLoading(true)
        const feedbackPrompt = "Question:"+mockInterviewQuestions[activeQuestionIndex]?.question+",User Answer:"+{transcript}+",Depends on question and user answer for given interview question"+"please give us rating for answer and feedback  as area of improvement if any"+"in just 3 to 5 lines to improve it in JSON format with rating field and feedback field.";
        const result= await chatSession.sendMessage(feedbackPrompt);
        const mockJsonResp = (result.response.text()).replace('```json','').replace('```','')
        // console.log(mockJsonResp)
        // console.log(mockJsonResp);
        const JsonFeedbackResp = JSON.parse(mockJsonResp);
        // console.log(JsonFeedbackResp)
        const resp = await db.insert(UserAnswer).values({
             mockIdRef:interviewData?.mockId,
             question:mockInterviewQuestions[activeQuestionIndex]?.question,
             correctAns:mockInterviewQuestions[activeQuestionIndex]?.answer,
             userAns:transcript,
             feedback:JsonFeedbackResp.feedback,
             rating:JsonFeedbackResp.rating,
             userEmail:user?.primaryEmailAddress?.emailAddress,
             createdAt:moment().format('DD-MM-yyyy')
        })

        if(resp){
            alert("User Answer recorded Successfully...!");
        }
        else{
          alert("Sorry! Your Answer was not recorded, try again")
        }
        setTranscript('');
        setLoading(false);
    }


    return (
        <div className='flex justify-center  items-center flex-col'>
            <div className='flex flex-col justify-center border shadow-xl ml-20 items-center gap-10 rounded-lg p-5 my-20'>
                <WebcamIcon width={200} height={200} className='absolute' />
                <Webcam mirrored={true} style={{ height: 300, width: '100%', zIndex: 10 }} />
            </div>
            <Button disabled={loading} onClick={handleToggleRecording} variant='outline' className='bg-white ml-20  text-slate-700 border rounded-full shadow-lg hover:bg-white hover:text-slate-800 hover:shadow-xl my-10'>
            {isRecording?(<div onClick={()=>SaveUserAnswer()}><h2 className='text-red-600 flex gap-2'><Mic/>Stop Recording</h2></div>):
                (<><Mic/>Record Answer</>)}
            </Button>
            
           
        </div>
    );
};

export default RecordAnswerSection;

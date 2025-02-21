import { Button } from '@/components/ui/button';
import React, { useContext, useState } from 'react'
import { 
    BtnBold,
    BtnBulletList,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnStrikeThrough,
    BtnUnderline,
    Editor,
    EditorProvider,
    Separator,
    Toolbar
  } from 'react-simple-wysiwyg';
import { ResumeInfoContext } from '../../_context/ResumeInfoContext';
import { LoaderCircle } from 'lucide-react';
import { chatSession } from '@/utils/GeminiAIResumeModel'

const RichTextEditor = ({onRichTextEditorChange,index,defaultValue,title}:any) => {
  const [value,setValue]=useState<any>(defaultValue);
  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
    const [loading,setLoading]=useState<any>(false);

    const GenerateSummeryFromAI=async()=>{
      console.log(title)
      setLoading(true)
        const result = await chatSession.sendMessage("position Title : "+title+" , Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experince level and No JSON array)");
        const resp=result.response.text()
        console.log(resp)
        setValue(resp.replace('{','').replace('"experience": ','').replace('[','').replace('"experience_bullets": ','').replace(']}','').replace(']','').replace('}',''));
        setLoading(false)
    }

  return (
    <div>
      <div className='flex justify-between my-2'>
        <label className='text-xs'>Summery</label>
        <Button  type='button'
        onClick={GenerateSummeryFromAI}
        disabled={loading}
        className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'>
          {loading?
          <LoaderCircle className='animate-spin'/>:  
          <>
          Generate from AI 
           </>
        }
         </Button>
      </div>
        <EditorProvider>
        <Editor value={value} onChange={(e)=>{
            setValue(e.target.value);
            onRichTextEditorChange(e)
        }}>
             <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnLink />
         
         
        </Toolbar>
        </Editor>
        </EditorProvider>
    </div>
  )
}

export default RichTextEditor
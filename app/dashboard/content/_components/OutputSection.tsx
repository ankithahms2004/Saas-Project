"use client"
import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copse } from 'next/font/google';
import { Copy } from 'lucide-react';


interface props{
  aiOutput:string;
}

const OutputSection = ({aiOutput}:props) => {

  const editorRef:any=useRef();

  useEffect(()=>{
    const editorInstance = editorRef.current.getInstance()
    editorInstance.setMarkdown(aiOutput)
  },[aiOutput])


  return (
    <div className='border rounded-lg shadow bg-white'>
        <div>
            <h2 className='p-1 font-medium text-lg'>
                Your Result
            </h2>
            <Button className='bg-white hover:bg-white shadow hover:shadow-lg ' onClick={()=>navigator.clipboard.writeText(aiOutput)} ><Copy></Copy></Button>
        </div>
    <div><Editor
    ref={editorRef}
    initialValue="Your result will appear here!"
    height="600px"
    initialEditType="wysiwyg"
    useCommandShortcut={true}
    onChange={()=>editorRef.current.getInstance().getMarkdown()}
  /></div>
  </div>
  )
}

export default OutputSection
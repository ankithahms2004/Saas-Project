"use client"
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from 'next/image';
import { useTypewriter,Cursor } from 'react-simple-typewriter';

export default function Home() {

  const [text] = useTypewriter({
    words:['Power of AI'],
    loop:true
  });


  return (
    <>
    <div id='no-print' className='shadow-lg flex justify-between pr-5'>
        <Image src={'/logo.svg'} alt='logo' width={160} height={100} className='p-3'/>
        <UserButton/>
    </div>
    <div className="text-center items-center justify-center mt-12"><h1 className=" mt-10 text-4xl font-bold">
    Explore the <span className="text-slate-700">{text}</span><Cursor/>
     </h1>
     
      <br/><h1 className="font-bold text-slate-700">Create your own Content, CV, Form's and more in 
        <br/>just seconds not hours</h1>
      <div className="mt-6">
      <h2><Link href={'/dashboard'}><Button className='mt-6 w-80 justify-center bg-white shadow-lg rounded-xl  hover:bg-white hover:shadow-xl'>Create Your own Content using AI</Button></Link></h2>
      <h2><Link href={'/dashboard1'}><Button className='mt-6 w-80 bg-white shadow-lg rounded-xl justify-center hover:bg-white hover:shadow-xl'>Get your free Mock Interview done using AI </Button></Link></h2>
      <h2><Link href={'/dashboard2'}><Button className='mt-6 w-80 bg-white shadow-lg rounded-xl justify-center hover:bg-white hover:shadow-xl'>Build your CV in just seconds using AI</Button></Link></h2>
      <h2><Link href={'/dashboard3'}><Button className='mt-6 w-80 bg-white shadow-lg rounded-xl justify-center hover:bg-white hover:shadow-xl'>Create your own Form using AI</Button></Link></h2>
      </div>
      </div>
      </>
  );
}

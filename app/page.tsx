// "use client"
// import { Button } from "@/components/ui/button";
// import { UserButton } from "@clerk/nextjs";
// import Link from "next/link";
// import Image from 'next/image';
// // import img from '/img_1.webp'
// import { useTypewriter,Cursor } from 'react-simple-typewriter';


// export default function Home() {
//     const [text] = useTypewriter({
//     words:['Power of AI.'],
//     loop:true
//   });


//   return (
//     <>
     
//     <div className="absolute overflow-hidden">
 
//         <img src="/img_4.jpg" width={'100%'} height={'100%'} className="h-screen w-screen"/>

//     </div>
    
//      <div className="justify-end flex p-2">
//         <UserButton/>
//         </div>
     
//     <div className="ml-2 md:ml-96 text-center absolute items-center justify-center mt-16 md:mt-0">
   
//       <h1 className="text-4xl text-white font-bold">Welcome to <span className="hover:text-5xl hover:underline cursor-pointer">Alpha<span className="text-slate-400">Sense</span></span></h1>
//       <h2 className="text-slate-300">a free AI Saas platform..</h2>
//       <div className="items-center flex text-center justify-center mt-10 md:mt-4">
//       <Image src={'/logo.svg'} alt='logo' width={160} height={100} className=' '/>
//       </div>
//     <h1 className=" mt-10 md:mt-5 text-white text-2xl font-bold">
//     Explore the <span className="text-slate-300">{text}</span><Cursor/>
//      </h1>
     
//       <h1 className="font-bold mt-6 text-slate-300">Create your own Content, CV, Form's and more in 
//       just seconds<br/>  not hours...</h1>
//       <div className="mt-10 md:mt-6">
//       <h2 className="mb-0 text-slate-300">What do you want to do?...</h2>
//       <h2><Link href={'/dashboard'}><Button className='mt-2 text-white w-80 justify-center bg-slate-500  rounded-xl  hover:bg-slate-500 transition duration-500 hover:scale-110'>Create Your own Content using AI</Button></Link></h2>
//       <h2><Link href={'/dashboard1'}><Button className='mt-6 w-80 text-white bg-slate-500  rounded-xl justify-center transition duration-500  hover:bg-slate-500 hover:scale-110'>Get your free Mock Interview done using AI </Button></Link></h2>
//       <h2><Link href={'/dashboard2'}><Button className='mt-6 w-80 text-white bg-slate-500  rounded-xl justify-center transition duration-500  hover:bg-slate-500 hover:scale-110'>Build your CV in just seconds using AI</Button></Link></h2>
//       <h2><Link href={'/dashboard3'}><Button className='mt-6 w-80 text-white bg-slate-500  rounded-xl justify-center transition duration-500  hover:bg-slate-500 hover:scale-110'>Create your own Form using AI</Button></Link></h2>
//       </div>
//       </div>
     
//       </>
//   );
// }







"use client"
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from 'next/image';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Home() {
    const [text] = useTypewriter({
        words: ['Power of AI.','Future of Automation.','Creative AI Solutions.','Power of Automation.','Digital Intelligence.','Next-Gen Creativity.','Intelligence Revolution.'],
        loop: true
    });

    return (
        <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/img_4.jpg')" }}>
            {/* Top Right User Button */}
            <div className="absolute top-4 right-4">
                <UserButton />
            </div>
            
            {/* Main Content */}
            <div className="text-center text-white  bg-opacity-50 p-10 rounded-xl shadow-lg max-w-2xl">
                <h1 className="text-4xl font-bold">Welcome to <span className="hover:text-5xl hover:underline cursor-pointer">Alpha<span className="text-slate-400">Sense</span></span></h1>
                <h2 className="text-slate-300">a free AI SaaS platform..</h2>
                <div className="flex justify-center mt-4">
                    <Image src={'/logo.svg'} alt='logo' width={160} height={100} />
                </div>
                <h1 className="mt-5 text-2xl font-bold">
                    Explore the <span className="text-slate-300">{text}</span><Cursor />
                </h1>
                
                <h1 className="font-bold mt-6 text-slate-300">
                    Create your own Content, CV, Forms, and more in just seconds<br /> not hours...
                </h1>
                
                {/* Buttons */}
                <div className="mt-6 space-y-4">
                    <h2 className="text-slate-300">What do you want to do?...</h2>
                    <Link href={'/dashboard'}>
                        <Button className='w-80 mt-4 bg-slate-500 text-white rounded-xl hover:scale-110 transition duration-500'>
                            Create Your own Content using AI
                        </Button>
                    </Link>
                    <Link href={'/dashboard1'}>
                        <Button className='w-80 mt-4 bg-slate-500 text-white rounded-xl hover:scale-110 transition duration-500'>
                            Get your free Mock Interview done using AI
                        </Button>
                    </Link>
                    <Link href={'/dashboard2'}>
                        <Button className='w-80 mt-4 bg-slate-500 text-white rounded-xl hover:scale-110 transition duration-500'>
                            Build your CV in just seconds using AI
                        </Button>
                    </Link>
                    <Link href={'/dashboard3'}>
                        <Button className='w-80 mt-4 bg-slate-500 text-white rounded-xl hover:scale-110 transition duration-500'>
                            Create your own Form using AI
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}


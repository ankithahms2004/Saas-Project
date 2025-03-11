// "use client"
// import { Button } from "@/components/ui/button";
// import { UserButton } from "@clerk/nextjs";
// import Link from "next/link";
// import Image from 'next/image';
// import { useTypewriter, Cursor } from 'react-simple-typewriter';

// export default function Home() {
//     const [text] = useTypewriter({
//         words: ['Power of AI.','Future of Automation.','Creative AI Solutions.','Power of Automation.','Digital Intelligence.','Next-Gen Creativity.','Intelligence Revolution.'],
//         loop: true
//     });

//     return (
//         <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/img_4.jpg')" }}>
//             {/* Top Right User Button */}
//             <div className="absolute top-4 right-4">
//                 <UserButton />
//             </div>
            
//             {/* Main Content */}
//             <div className="text-center text-white  bg-opacity-50 p-10 rounded-xl shadow-lg max-w-2xl">
//                 <h1 className="text-4xl font-bold">Welcome to <span className="hover:text-5xl hover:underline cursor-pointer">Alpha<span className="text-slate-400">Sense</span></span></h1>
//                 <h2 className="text-slate-300">a free AI SaaS platform..</h2>
//                 <div className="flex justify-center mt-4">
//                     <Image src={'/logo.svg'} alt='logo' width={160} height={100} />
//                 </div>
//                 <h1 className="mt-5 text-2xl font-bold">
//                     Explore the <span className="text-slate-300">{text}</span><Cursor />
//                 </h1>
                
//                 <h1 className="font-bold mt-6 text-slate-300">
//                     Create your own Content, CV, Forms, and more in just seconds<br /> not hours...
//                 </h1>
                
//                 {/* Buttons */}
//                 <div className="mt-6 space-y-4">
//                     <h2 className="text-slate-300">What do you want to do?...</h2>
//                     <Link href={'/dashboard'}>
//                         <Button className='w-80 mt-4 bg-slate-500 text-white rounded-xl hover:scale-110 transition duration-500'>
//                             Create Your own Content using AI
//                         </Button>
//                     </Link>
//                     <Link href={'/dashboard1'}>
//                         <Button className='w-80 mt-4 bg-slate-500 text-white rounded-xl hover:scale-110 transition duration-500'>
//                             Get your free Mock Interview done using AI
//                         </Button>
//                     </Link>
//                     <Link href={'/dashboard2'}>
//                         <Button className='w-80 mt-4 bg-slate-500 text-white rounded-xl hover:scale-110 transition duration-500'>
//                             Build your CV in just seconds using AI
//                         </Button>
//                     </Link>
//                     <Link href={'/dashboard3'}>
//                         <Button className='w-80 mt-4 bg-slate-500 text-white rounded-xl hover:scale-110 transition duration-500'>
//                             Create your own Form using AI
//                         </Button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }





"use client"
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from 'next/image';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Home() {
    const [text] = useTypewriter({
        words: [
            'Power of AI.',
            'Future of AI.',
            'Intelligence Revolution.',
            'Next-Gen Creativity.',
            'Limitless Possibilities.',
            'Innovation Era.',
            'Smart AI Solutions.',
            'AI-Powered World.',
            'Technology of Tomorrow.'
        ],
        loop: true
    });

    return (
        <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/img_4.jpg')" }}>
            {/* Top Right User Button */}
            <div className="absolute top-6 right-6">
                <UserButton />
            </div>
            
            {/* Main Content */}
            <div className="text-center text-white p-12 rounded-2xl max-w-3xl ">
                <h1 className="text-5xl font-extrabold">Welcome to <span className="hover:text-6xl hover:underline cursor-pointer">Alpha<span className="text-slate-400">Sense</span></span></h1>
                <h2 className="text-lg text-slate-300 mt-2">A free AI SaaS platform designed for efficiency and speed.</h2>
                
                <div className="flex justify-center mt-6">
                    <Image src={'/logo.svg'} alt='logo' width={180} height={120} className="drop-shadow-lg" />
                </div>
                
                <h1 className="mt-6 text-3xl font-semibold">
                    Explore the <span className="text-slate-300">{text}</span><Cursor />
                </h1>
                
                <h1 className="font-semibold mt-6 text-lg text-slate-300">
                    Create your own content, CV, forms, and more in just seconds—<br /> not hours.
                </h1>
                
                {/* Buttons */}
                <div className="mt-8 space-y-4">
                    <h2 className="text-lg text-slate-300 font-medium">What do you want to do?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Link href={'/dashboard'}>
                        <Button className='w-80 mt-4 bg-slate-500 text-white rounded-xl hover:scale-110 transition duration-500'>
                            ✍️ Create Your Own Content using AI
                        </Button>
                    </Link>
                    <Link href={'/dashboard1'}>
                        <Button className='w-80 mt-4 bg-slate-500 text-white rounded-xl hover:scale-110 transition duration-500'>
                            🎤 Get Your Free Mock Interview Done using AI
                        </Button>
                    </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <Link href={'/dashboard2'}>
                            <Button className='w-80 mt-4 bg-slate-500 text-white rounded-xl hover:scale-110 transition duration-500'>
                                📄 Build Your CV in Just Seconds using AI
                            </Button>
                        </Link>
                        <Link href={'/dashboard3'}>
                            <Button className='w-80 mt-4 bg-slate-500 text-white rounded-xl hover:scale-110 transition duration-500'>
                                📑 Create Your Own Form using AI
                            </Button>
                        </Link>
                    </div>
                    </div>
            </div>
        </div>
    );
}

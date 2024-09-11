import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="text-center mt-10"><h1 className=" mt-10 text-2xl font-bold">Welcome to Saas Application
      </h1><br/><h1 className="font-semibold">Explore the power of AI</h1>
      <div className="mt-5">
      <h2><Link href={'/dashboard'}><Button className='mt-5 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'>AI Content-Generator</Button></Link></h2>
      <h2><Link href={'/dashboard1'}><Button className='mt-5 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'>AI Interview</Button></Link></h2>
      <h2><Link href={'/dashboard2'}><Button className='mt-5 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'>AI Resume Builder</Button></Link></h2>
      <h2><Link href={'/dashboard3'}><Button className='mt-5 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'>AI Form builder</Button></Link></h2>
      </div>
      </div>
  );
}

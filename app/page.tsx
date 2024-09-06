import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="text-center mt-10"><h1 className=" mt-10 text-2xl font-bold">Welcome to Saas Application
      </h1><br/><h1 className="font-semibold">Explore the power of AI</h1><h2><Link href={'/dashboard'}><Button className="shadow-md hover:shadow-lg mt-8" variant={"destructive"}>Content-Generator</Button></Link></h2>
      <h2><Link href={'/dashboard1'}><Button className="shadow-md hover:shadow-lg mt-8" variant={"destructive"}>AI Interview</Button></Link></h2>
      <h2><Link href={'/dashboard2'}><Button className="shadow-md hover:shadow-lg mt-8" variant={"destructive"}>Resume Builder</Button></Link></h2>
      </div>
  );
}

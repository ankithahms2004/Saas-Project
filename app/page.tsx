import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div><h2>hello world
      </h2><Link href={'/dashboard'}><Button variant={"destructive"}>hello</Button></Link>
      
      </div>
  );
}

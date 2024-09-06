
"use client";
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Adjust the import based on your button component
import { Home, ArrowLeft, ArrowRight } from 'lucide-react'; // Adjust the import based on your icon components
import PersonalDetail from './forms/PersonalDetail';
import Summery from './forms/Summery';
import Experience from './forms/Experience';
import Education from './forms/Education';
import Skills from './forms/Skills';
import { useRouter } from 'next/navigation';

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enabledNext, setEnableNext] = useState(false);
  const {resumeId}=useParams();

  const router = useRouter();
  return (
    <div>
      <div className='flex justify-end mt-3 gap-5'>
        <Link href={'/dashboard2'}>
          <Button className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'>
            <Home />Home
          </Button>
        </Link>
      </div>
      <div className='flex gap-3'>
        {activeFormIndex > 1 && (
          <Button
            className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex - 1)}
          >
            <ArrowLeft />
          </Button>
        )}
        {activeFormIndex < 5 ? (
          <Button
            className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'
            disabled={!enabledNext}
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next
            <ArrowRight />
          </Button>
        ) : (
          <Link href={'/dashboard2/my-resume/'+resumeId+'/view'}>
          <Button
            className='gap-4 bg-white shadow-md rounded-xl justify-end hover:bg-white hover:shadow-lg'
            size="sm"
            
          >
            Download
          </Button></Link>
        )}
      </div>
      {activeFormIndex === 1 ? (
        <PersonalDetail enabledNext={(v:any) => setEnableNext(v)} />
      ) : activeFormIndex === 2 ? (
        <Summery enabledNext={(v:any) => setEnableNext(v)} />
      ) : activeFormIndex === 3 ? (
        <Experience enabledNext={(v:any) => setEnableNext(v)} />
      ) : activeFormIndex === 4 ? (
        <Education enabledNext={(v:any) => setEnableNext(v)} />
      ) : activeFormIndex === 5 ? (
        <Skills enabledNext={(v:any) => setEnableNext(v)} />
      ) : null}
    </div>
  );
};
export default FormSection;

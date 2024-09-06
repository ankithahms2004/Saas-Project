"use client";
import { createContext } from "react";

interface ResumeContextType {
    resumeInfo: any;
    setResumeInfo: React.Dispatch<any>;
}

const defaultContext: ResumeContextType = {
    resumeInfo: {},
    setResumeInfo: () => {},
};


export const ResumeInfoContext = createContext<ResumeContextType>(defaultContext);
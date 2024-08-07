import React, { ReactNode } from 'react';
import Header from './_components/Header';

interface Dashboard1LayoutProps {
  children: ReactNode;
}

const Dashboard1Layout: React.FC<Dashboard1LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header/>
      <div className='mx-5 md:mx-20 lg:mx-36'>
      {children}
      </div>
    </div>
  );
}

export default Dashboard1Layout;

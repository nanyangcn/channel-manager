import React from 'react';

interface MainProps {
  children: React.ReactNode
}
function Main({ children }: MainProps) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-500">
      <div className="flex h-[730px] w-[920px] flex-col rounded-2xl bg-secondary">
        {children}
      </div>
    </div>
  );
}

export default Main;

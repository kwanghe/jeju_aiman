import React from 'react';
import { RocketIcon } from 'lucide-react';

export const Header = () => {
  return (
    <header className="w-full py-6 bg-indigo-900 text-white">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <RocketIcon className="w-8 h-8 mr-3" />
        <h1 className="text-2xl font-bold">수학여행은 우주로 가자</h1>
      </div>
    </header>
  );
};
import React, { useRef, useState } from 'react';
import Image from 'next/image';

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchInput: React.FC<Props> = ({ setQuery }) => {
  const [text, setText] = useState<string>('');
  const timer = useRef<NodeJS.Timeout>();
  const TIME_OUT = 300
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timer.current);
    setText(e.target.value);
    timer.current = setTimeout(() => {
      setQuery(e.target.value);
    }, TIME_OUT);
    
  };
  return (
    <>
      <input
        className='h-10 pr-14 md:w-50 rounded-full p-4 text-md bg-zinc-800 text-white focus:outline-none'
        type='text'
        placeholder='Search Movie'
        value={text}
        onChange={(e) => handleInput(e)}
      />
      <div className='absolute right-4'>
        <Image width={30} height={32} src='/tmdb-logo.svg' alt='' />
      </div>
    </>
  );
};

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import storeImg from '../../assets/store-front.jpg';

function Header() {
  const [count, setCount] = useState(0);

  function incr() {
    setCount(count + 1);
  }

  return (
    <div className="flex justify-center flex-col items-center gap-6 min-h-screen">
      <h1 className="text-zinc-200 text-5xl font-bold">The Cookie Monster&apos;s Den</h1>
      <h4 className="text-zinc-200 text-xl font-mono">Where cookie maniacs gather</h4>
      <Image className="rounded-3xl" src={storeImg} alt="store" width={500} />
      <div className="flex justify-center w-[500px] items-center text-center">
        <div className="border border-zinc-200/[.2] rounded-l-full px-6 py-3 w-full">{count} Likes</div>
        <button
          type="button"
          className="w-full rounded-r-full border border-solid border-zinc-200/[.2] bg-zinc-200 text-zinc-950 font-semibold font-mono transition-colors flex items-center justify-center hover:bg-zinc-200/[.5] hover:border-transparent text-sm sm:text-base py-3 px-6"
          onClick={incr}
        >
          Like?
        </button>
      </div>
      <a
        className="w-[500px] rounded-full border border-solid border-zinc-200/[.2] bg-zinc-200 text-zinc-950 font-semibold font-mono transition-colors flex items-center justify-center hover:bg-zinc-200/[.5] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="#products"
      >
        Order now!
      </a>
    </div>
  );
}

export default Header;

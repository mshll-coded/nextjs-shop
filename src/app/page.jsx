import Image from 'next/image';
import storeImg from '../assets/store-front.jpg';

export default function Home() {
  return (
    <div className="bg-zinc-950 flex justify-center flex-col items-center py-4 gap-6 min-h-screen">
      <h1 className="text-zinc-200 text-5xl font-bold">The Cookie Monster&apos;s Den</h1>
      <h4 className="text-zinc-200 text-xl font-bold">Where cookie maniacs gather</h4>
      <Image className="rounded-3xl" src={storeImg} alt="store" width={500} />
      <a
        className="w-[500px] rounded-full border border-solid border-zinc-200/[.2] bg-zinc-200 text-zinc-950 font-semibold transition-colors flex items-center justify-center hover:bg-zinc-200/[.5] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
        Order now
      </a>
    </div>
  );
}

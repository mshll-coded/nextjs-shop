import Image from 'next/image';
import storeImg from '../assets/store-front.jpg';
import { products } from './products';

export default function Home() {
  return (
    <div className="bg-zinc-950 flex justify-center flex-col items-center pb-24 gap-6 min-h-screen container mx-auto">
      <div className="flex justify-center flex-col items-center gap-6 min-h-screen">
        <h1 className="text-zinc-200 text-5xl font-bold">The Cookie Monster&apos;s Den</h1>
        <h4 className="text-zinc-200 text-xl font-bold">Where cookie maniacs gather</h4>
        <Image className="rounded-3xl" src={storeImg} alt="store" width={500} />
        <a
          className="w-[500px] rounded-full border border-solid border-zinc-200/[.2] bg-zinc-200 text-zinc-950 font-semibold transition-colors flex items-center justify-center hover:bg-zinc-200/[.5] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="#products"
        >
          Order now!
        </a>
      </div>

      <div className="mt-20 mb-10 font-black text-4xl" id="products">
        Products
      </div>
      <div className="flex gap-8 flex-wrap justify-center items-center mx-20">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-zinc-900 rounded-3xl p-4 flex items-center shadow-lg w-[300px] h-[150px] gap-4 border-2 border-zinc-200/[.1]"
          >
            <Image src={product.image} alt={product.name} width={100} height={100} />
            <div className="flex flex-col gap-1">
              <h3 className="text-zinc-200 text-xl font-bold">{product.name}</h3>
              <p className="text-zinc-400 text-lg font-semibold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

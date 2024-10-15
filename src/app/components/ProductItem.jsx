import Image from 'next/image';
import { products } from '../data/products';

function ProductItem() {
  const product = products[0];
  return (
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
  );
}

export default ProductItem;

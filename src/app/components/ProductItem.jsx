import Image from 'next/image';

function ProductItem({ product }) {
  return (
    <div
      key={product.name}
      className="flex items-center gap-4 border-2 border-zinc-200/[.1] bg-zinc-900 shadow-lg p-4 rounded-3xl w-[350px] h-[150px]"
    >
      <Image src={product.image} alt={product.name} width={100} height={100} />
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-xl text-zinc-200">{product.name}</h3>
        <p className="text-lg text-zinc-400">{product.price} KD</p>
      </div>
    </div>
  );
}

export default ProductItem;

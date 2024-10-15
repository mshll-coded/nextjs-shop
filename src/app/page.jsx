import ProductList from './components/ProductList';
import Header from './components/Header';

export default function Home() {
  return (
    <div className="bg-zinc-950 flex justify-center flex-col items-center pb-24 gap-6 min-h-screen container mx-auto">
      <Header />

      <div className="mt-20 mb-10 font-black text-4xl" id="products">
        Products
      </div>
      <ProductList />
    </div>
  );
}

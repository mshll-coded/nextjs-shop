import { products } from '../data/products';
import ProductItem from './ProductItem';

function ProductList() {
  return (
    <div className="flex gap-8 flex-wrap justify-center items-center mx-20">
      {products.map((product) => (
        <ProductItem key={product.name} />
      ))}
    </div>
  );
}

export default ProductList;

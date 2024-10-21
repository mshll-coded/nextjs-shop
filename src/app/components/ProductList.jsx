import products from '../data/products';
import ProductItem from './ProductItem';

function ProductList() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 mx-20">
      {products.map((product) => (
        <ProductItem key={product.name} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

import ProductList from '../components/ProductList';

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Todos los Productos</h2>
      <ProductList />
    </div>
  );
}
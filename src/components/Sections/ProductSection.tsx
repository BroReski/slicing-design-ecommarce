import { products } from '../../data/dummyData';
import { ProductCard } from '../UI/ProductCard';
import { SearchBar } from '../UI/SearchBar';
import { useState } from 'react';

export const ProductSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full flex flex-col pt-10">
      <h2 className="text-black font-poppins text-3xl font-medium text-center mb-8">
        All Products
      </h2>
      <SearchBar setSearchQuery={setSearchQuery}/>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     {filteredProducts.length > 0 ? (
      filteredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))
     ) : (
      <p>Product not found</p>
     )} 
      </div>
    </section>
  );
};

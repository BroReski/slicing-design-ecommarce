import { useState } from 'react';
import { BuyButton } from './BuyButton';
import { useCartStore } from '../../store/useCartStore';

interface ProductCardProps {
  imageSrc: string;
  category: string;
  name: string;
  description: string;
  price: string;
}

export const ProductCard = ({
  imageSrc,
  category,
  name,
  description,
  price,
}: ProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [showNotification, setShowNotification] = useState(false);

  const handleBuyClick = () => {
    addToCart({
      id: name,
      name,
      category,
      price,
      imageSrc,
    });
    
    // Show a quick visual feedback
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-md overflow-hidden transition-transform hover:-translate-y-1 relative">
      <img
        src={imageSrc}
        className="w-full h-[200px] object-cover bg-gray-50 p-2"
        alt={name}
      />
      
      {/* Toast Notification */}
      <div 
        className={`absolute top-2 right-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded shadow-md transition-opacity duration-300 ${
          showNotification ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        Added to cart!
      </div>
      
      <div className="flex flex-col p-4 flex-1 justify-between">
        <div className="flex flex-col gap-1 mb-4">
          <p className="text-light-grey font-poppins text-xs font-light">{category}</p>
          <p className="text-black font-poppins text-base font-medium line-clamp-1" title={name}>
            {name}
          </p>
          <p className="text-black font-poppins text-xs font-light line-clamp-2 mt-1 opacity-70">
            {description}
          </p>
        </div>
        
        <div className="flex justify-between items-center border-t border-gray-100 pt-3">
          <p className="text-black font-poppins text-sm font-semibold">{price}</p>
          <BuyButton onClick={handleBuyClick} />
        </div>
      </div>
    </div>
  );
};
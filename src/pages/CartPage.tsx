import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart } = useCartStore();

  const totalPrice = items.reduce((total, item) => {
    // Extract only digits from string "Rp 4.500.000"
    const priceStr = item.price.replace(/[^0-9]+/g, ''); // digunakan untuk mengubah string harga menjadi number dan membuang karakter non-numerik
    const price = parseInt(priceStr, 10); // digunakan untuk mengubah string menjadi number
    return total + (price * item.quantity); // digunakan untuk menghitung total harga
  }, 0); // digunakan untuk menjumlahkan semua harga

  return (
    <div className="bg-[#FAFBFC] min-h-screen w-full font-poppins text-black pb-20">
      <header className="sticky top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-[1200px] mx-auto flex py-4 px-5 md:px-[81px] items-center">
          <Link to="/" className="text-primary font-medium flex items-center gap-2">
            <span>&larr;</span> Back to Store
          </Link>
          <div className="flex-1 text-center font-semibold text-lg text-[#2C2C2C]">
            Your Shopping Cart
          </div>
          <div className="w-[100px]"></div> {/* Spacer */}
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto w-full px-5 md:px-[81px] mt-10 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-sm text-center text-gray-500">
              Your cart is empty.
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm flex flex-col sm:flex-row items-center gap-6">
                <img src={item.imageSrc} alt={item.name} className="w-24 h-24 object-cover bg-gray-50 rounded-md p-2" />
                <div className="flex-1 flex flex-col">
                  <p className="text-light-grey text-xs font-light">{item.category}</p>
                  <p className="text-black text-lg font-medium">{item.name}</p>
                  <p className="text-primary font-semibold mt-1">{item.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
                    <button 
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="px-3 py-1 bg-gray-50 hover:bg-gray-100 font-medium"
                    >
                      -
                    </button>
                    <div className="px-4 py-1 text-sm font-medium min-w-[40px] text-center">
                      {item.quantity}
                    </div>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 bg-gray-50 hover:bg-gray-100 font-medium"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[350px] bg-white p-6 rounded-lg shadow-sm h-fit sticky top-24">
          <h2 className="text-xl font-medium mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Items ({items.length})</span>
            <span className="font-medium">Rp {totalPrice.toLocaleString('id-ID')}</span>
          </div>
          <div className="flex justify-between mb-6 pb-6 border-b border-gray-100">
            <span className="text-gray-600">Shipping</span>
            <span className="text-green-500 font-medium">Free</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="font-semibold text-lg">Total</span>
            <span className="font-bold text-xl text-primary">Rp {totalPrice.toLocaleString('id-ID')}</span>
          </div>
          <button 
            className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={items.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </main>
    </div>
  );
}

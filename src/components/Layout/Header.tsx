import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';
import { useAuthStore } from '../../store/useAuthStore';

export const Header = () => {
  const cartItems = useCartStore((state) => state.items);
  const cartItemsCount = cartItems.length;
  const currentUser = useAuthStore((state) => state.currentUser);

  return (
    <header className="sticky top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-[1200px] mx-auto flex py-4 px-5 md:px-[81px] justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <p className="text-[#2C2C2C] font-poppins text-lg font-medium">
              Creative Store
            </p>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          <Link to="/">
            <div className="flex flex-col items-center cursor-pointer">
              <p className="text-primary font-poppins text-sm font-medium">Home</p>
              <div className="w-[30px] h-0.5 bg-primary rounded-full mt-1" />
            </div>
          </Link>
          <div className="flex flex-col items-center cursor-pointer">
            <p className="text-[#2C2C2C] font-poppins text-sm font-light">Category</p>
            <div className="w-[30px] h-0.5 bg-transparent rounded-full mt-1" />
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <p className="text-[#2C2C2C] font-poppins text-sm font-light">Product</p>
            <div className="w-[30px] h-0.5 bg-transparent rounded-full mt-1" />
          </div>
          {/* Shopping Bag Icon */}
          <Link to="/cart" className="cursor-pointer ml-4 relative">
            <svg width="18" height="20" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1C7.66304 1 8.29893 1.26339 8.76777 1.73223C9.23661 2.20107 9.5 2.83696 9.5 3.5V4H4.5V3.5C4.5 2.83696 4.76339 2.20107 5.23223 1.73223C5.70107 1.26339 6.33696 1 7 1ZM10.5 4V3.5C10.5 2.57174 10.1313 1.6815 9.47487 1.02513C8.8185 0.368749 7.92826 0 7 0C6.07174 0 5.1815 0.368749 4.52513 1.02513C3.86875 1.6815 3.5 2.57174 3.5 3.5V4H0V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H12C12.5304 16 13.0391 15.7893 13.4142 15.4142C13.7893 15.0391 14 14.5304 14 14V4H10.5ZM1 5H13V14C13 14.2652 12.8946 14.5196 12.7071 14.7071C12.5196 14.8946 12.2652 15 12 15H2C1.73478 15 1.48043 14.8946 1.29289 14.7071C1.10536 14.5196 1 14.2652 1 14V5Z" fill="#2C2C2C" />
            </svg>
            {cartItemsCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartItemsCount}
              </div>
            )}
          </Link>
        </nav>

        {/* Action Buttons / Profile */}
        <div className="flex items-center gap-4">
          {currentUser ? (
            <Link to="/profile" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white overflow-hidden shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor" />
                  <path d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" fill="currentColor" />
                </svg>
              </div>
              <p className="text-black font-poppins text-sm font-medium hidden sm:block">My Profile</p>
            </Link>
          ) : (
            <>
              <Link to="/register" className="cursor-pointer rounded-md text-nowrap flex py-2 px-6 justify-center items-center bg-secondary transition-colors hover:bg-orange-100">
                <p className="text-primary font-poppins text-sm font-medium">Sign Up</p>
              </Link>
              <Link to="/login" className="cursor-pointer rounded-md text-nowrap flex py-2 px-6 justify-center items-center bg-primary transition-colors hover:bg-orange-500">
                <p className="text-white font-poppins text-sm font-medium">Login</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
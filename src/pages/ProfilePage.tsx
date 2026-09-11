import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export default function ProfilePage() {
  const navigate = useNavigate();
  const currentUser = useAuthStore((state) => state.currentUser);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // If not logged in, maybe redirect or just show empty (for safety)
  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center font-poppins">
        <div className="text-center">
          <p className="mb-4 text-gray-500">You are not logged in.</p>
          <Link to="/login" className="bg-primary text-white px-6 py-2 rounded-md">Go to Login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFBFC] min-h-screen w-full font-poppins text-black pb-20">
      <header className="sticky top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-[1200px] mx-auto flex py-4 px-5 md:px-[81px] items-center">
          <Link to="/" className="text-primary font-medium flex items-center gap-2">
            <span>&larr;</span> Back to Store
          </Link>
          <div className="flex-1 text-center font-semibold text-lg text-[#2C2C2C]">
            My Profile
          </div>
          <div className="w-[100px]"></div> {/* Spacer */}
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto w-full px-5 md:px-[81px] mt-10 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-[280px] bg-white rounded-lg shadow-sm overflow-hidden h-fit">
          <div className="p-6 flex flex-col items-center border-b border-gray-100">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 relative">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor" />
                <path d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" fill="currentColor" />
              </svg>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary shadow-sm transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              </button>
            </div>
            <h2 className="font-semibold text-lg">{currentUser.name}</h2>
            <p className="text-gray-500 text-sm">{currentUser.email}</p>
          </div>
          
          <nav className="flex flex-col py-2">
            <button className="px-6 py-3 text-left font-medium text-primary bg-orange-50 border-r-4 border-primary transition-colors flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              Personal Info
            </button>
            <button className="px-6 py-3 text-left font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              My Orders
            </button>
            <button className="px-6 py-3 text-left font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Addresses
            </button>
            <button onClick={handleLogout} className="px-6 py-3 text-left font-medium text-red-500 hover:bg-red-50 mt-4 border-t border-gray-100 transition-colors flex items-center gap-3 cursor-pointer w-full">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              Logout
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h1 className="text-2xl font-semibold mb-6">Personal Information</h1>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">First Name</label>
                <input type="text" defaultValue={currentUser.name} className="px-4 py-2 border border-gray-200 rounded-md outline-none focus:border-primary transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" defaultValue={currentUser.name} className="px-4 py-2 border border-gray-200 rounded-md outline-none focus:border-primary transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" defaultValue={currentUser.email} className="px-4 py-2 border border-gray-200 rounded-md outline-none focus:border-primary transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" defaultValue="+62 812 3456 7890" className="px-4 py-2 border border-gray-200 rounded-md outline-none focus:border-primary transition-colors" />
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-medium text-lg mb-4">Shipping Address</h3>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Full Address</label>
                <textarea 
                  rows={3} 
                  defaultValue="Jl. Sudirman No. 123, Senayan, Kebayoran Baru, Jakarta Selatan, 12190"
                  className="px-4 py-2 border border-gray-200 rounded-md outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button type="button" className="bg-primary text-white px-8 py-2.5 rounded-md font-medium hover:bg-orange-500 transition-colors">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

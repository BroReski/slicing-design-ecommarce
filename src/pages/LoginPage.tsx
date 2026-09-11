import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export default function LoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const result = login(email, password);

    if (result.success) {
      navigate('/');
    } else {
      setError(result.message);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-[#FAFBFC] min-h-screen w-full font-poppins text-black flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8 border border-gray-100">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block text-[#2C2C2C] text-2xl font-bold mb-2 hover:text-primary transition-colors">
            Creative Store
          </Link>
          <p className="text-gray-500 text-sm">Welcome back! Please login to your account.</p>
        </div>

        {error && showNotification && (
          <div className="bg-red-100 text-red-500 p-3 rounded-md mb-6 text-sm text-center border border-red-300">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-md outline-none focus:border-primary transition-colors" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-md outline-none focus:border-primary transition-colors" 
            />
          </div>

          <div className="flex justify-end">
            <a href="#" className="text-sm text-primary hover:underline font-medium">Forgot Password?</a>
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-orange-500 transition-colors mt-2"
          >
            Login
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary font-semibold hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

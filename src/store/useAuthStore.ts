import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  phone?: string;
  address?: string;
}

interface AuthState {
  users: User[]; // menyimpan data users
  currentUser: User | null; // menyimpan data user yang sedang login
  register: (user: Omit<User, 'id'>) => { success: boolean; message: string };
  login: (email: string, password?: string) => { success: boolean; message: string };
  logout: () => void;
  updateProfile: (user: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist( // untuk menyimpan data user di local storage agar tidak hilang saat page reload
    (set, get) => ({
      users: [], // array yang menyimpan data users
      currentUser: null, // menyimpan data user yang sedang login

      register: (userData) => {
        const { users } = get();
        
        // Check if email already exists
        const userExists = users.some((u) => u.email === userData.email);
        if (userExists) {
          return { success: false, message: 'Email already registered.' };
        }

        const newUser: User = {
          ...userData,
          id: Math.random().toString(36).substring(2, 9),
        };

        set({ users: [...users, newUser] });
        return { success: true, message: 'Registration successful!' };
      },

      login: (email, password) => {
        const { users } = get();
        const findUser = users.find((u) => u.email === email && u.password === password);
        
        if (findUser) {
          // Store user without password in session/current user
          const { password: _, ...userWithoutPassword } = findUser;
          set({ currentUser: userWithoutPassword as User });
          return { success: true, message: 'Login successful!' };
        }
        
        return { success: false, message: 'Invalid email or password.' };
      },

      logout: () => {
        set({ currentUser: null });
        set({ users: [] });
      },

      updateProfile: (updatedData) => {
        set((state) => {
          if (!state.currentUser) return state;

          const updatedUser = { ...state.currentUser, ...updatedData };
          
          return {
            currentUser: updatedUser,
            users: state.users.map((u) => (u.id === updatedUser.id ? { ...u, ...updatedData } : u)),
          };
        });
      },
    }),
    {
      name: 'auth-storage', // key in localStorage
    }
  )
);

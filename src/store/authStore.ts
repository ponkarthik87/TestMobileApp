import { create } from 'zustand';
import { storage } from '@services/storage';
import type { User } from '../types/index';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // Actions
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  login: (user: User, token: string) => void;
  logout: () => void;
  initialize: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,

  setUser: user => set({ user }),

  setToken: token => {
    storage.set('auth_token', token);
    set({ token });
  },

  login: (user, token) => {
    storage.set('auth_token', token);
    storage.set('user', JSON.stringify(user));
    set({ user, token, isAuthenticated: true });
  },

  logout: () => {
    storage.delete('auth_token');
    storage.delete('user');
    set({ user: null, token: null, isAuthenticated: false });
  },

  initialize: () => {
    const token = storage.getString('auth_token');
    const userStr = storage.getString('user');
    const user = userStr ? JSON.parse(userStr) : null;

    set({
      token,
      user,
      isAuthenticated: !!token && !!user,
      isLoading: false,
    });
  },
}));

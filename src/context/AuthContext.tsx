import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService, type User, type LoginData, type RegisterData } from '../services/authService';


interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  error: string | null;
  setError: (error: string | null) => void;
  isLoading: boolean;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user is already logged in by verifying token
    const token = localStorage.getItem('token');
    if (token) {
      verifyToken();
    }
  }, []);

  const verifyToken = async () => {
    try {
      setIsLoading(true);
      const response = await authService.verifyToken();
      setUser(response.user);
      localStorage.setItem('currentUser', JSON.stringify(response.user));
    } catch (error: any) {
      console.error('Token verification failed:', error);
      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };
  const login = async (username: string, password: string): Promise<boolean> => {
    setError(null);
    setIsLoading(true);
    
    try {
      const response = await authService.login({ username, password });
      
      // Store token and user data
      localStorage.setItem('token', response.token);
      localStorage.setItem('currentUser', JSON.stringify(response.user));
      setUser(response.user);
      
      return true;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Error de conexión con el servidor';
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    setError(null);
    setIsLoading(true);
    
    try {
      const response = await authService.register(userData);
      
      // Store token and user data (auto-login after registration)
      localStorage.setItem('token', response.token);
      localStorage.setItem('currentUser', JSON.stringify(response.user));
      setUser(response.user);
      
      return true;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Error de conexión con el servidor';
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setError(null);
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, error, setError, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
import api from './api';

export interface LoginData {
  username: string;
  password: string;
}

export interface RegisterData {
  username: string;
  password: string;
  nombre: string;
  apellido: string;
  cedula: string;
  fechaNacimiento: string;
}

export interface User {
  _id: string;
  username: string;
  nombre: string;
  apellido: string;
  cedula: string;
  fechaNacimiento: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
}

export const authService = {
  async login(data: LoginData): Promise<AuthResponse> {
    const response = await api.post('/auth/login', data);
    return response.data;
  },

  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await api.post('/auth/register', data);
    return response.data;
  },

  async verifyToken(): Promise<{ user: User; message: string }> {
    const response = await api.get('/auth/verify');
    return response.data;
  },

  async testConnection(): Promise<{ message: string; timestamp: string }> {
    const response = await api.get('/test');
    return response.data;
  }
};
import React from 'react';
import { Shield, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ConnectionStatus from './ConnectionStatus';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-primary-500" />
            <h1 className="text-2xl font-bold text-primary-600">AccesoSeguro</h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <ConnectionStatus />
            
          {user && (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">
                  Bienvenido, <span className="font-semibold">{user.nombre} {user.apellido}</span>
                </span>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 px-4 py-2 text-error-500 hover:text-error-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Cerrar Sesión</span>
                </button>
              </div>
          )}
          </div>
        </div>
      </div>
    </header>
  );
}
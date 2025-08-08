import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <AlertTriangle className="w-8 h-8 text-error-500" />
          </div>
          
          <h1 className="text-3xl font-bold text-error-600 mb-4">¡Oops! Algo salió mal</h1>
          
          <p className="text-gray-600 mb-8">
            La página que estás buscando no existe o ha ocurrido un error inesperado.
            Verifica la URL o regresa al inicio.
          </p>

          <div className="space-y-4">
            <Link
              to="/dashboard"
              className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Ir al Dashboard</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver Atrás</span>
            </button>
          </div>

          <div className="mt-8 p-4 bg-background-light rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">¿Necesitas ayuda?</h3>
            <p className="text-sm text-gray-600">
              Si el problema persiste, verifica tu conexión a internet o contacta al administrador del sistema.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
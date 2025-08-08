import React from 'react';
import { CheckCircle, User, Calendar, CreditCard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-primary-700 mb-2">¡Bienvenido a AccesoSeguro!</h1>
          <p className="text-gray-600">Has iniciado sesión exitosamente</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-primary-600 mb-4">Información del Usuario</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-background-light rounded-lg">
                <User className="w-5 h-5 text-primary-500" />
                <div>
                  <p className="text-sm text-gray-600">Nombre Completo</p>
                  <p className="font-semibold">{user.nombre} {user.apellido}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-background-light rounded-lg">
                <CreditCard className="w-5 h-5 text-primary-500" />
                <div>
                  <p className="text-sm text-gray-600">Cédula</p>
                  <p className="font-semibold">{user.cedula}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-background-light rounded-lg">
                <Calendar className="w-5 h-5 text-primary-500" />
                <div>
                  <p className="text-sm text-gray-600">Fecha de Nacimiento</p>
                  <p className="font-semibold">{new Date(user.fechaNacimiento).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-background-light rounded-lg">
                <User className="w-5 h-5 text-primary-500" />
                <div>
                  <p className="text-sm text-gray-600">Usuario</p>
                  <p className="font-semibold">{user.username}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-primary-600 mb-4">Estado de Seguridad</h2>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-green-800">Cuenta Verificada</h3>
              </div>
              <p className="text-green-700 mb-4">
                Tu cuenta ha sido verificada exitosamente y tienes acceso completo al sistema.
              </p>
              <div className="space-y-2 text-sm text-green-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Autenticación completada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Datos personales validados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Sesión segura activa</span>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary-800 mb-2">Información del Sistema</h3>
              <p className="text-primary-700 text-sm">
                AccesoSeguro utiliza tecnología de última generación para proteger tus datos personales 
                y garantizar una experiencia de usuario segura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
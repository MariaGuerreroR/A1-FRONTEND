import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
      <div className="flex items-center space-x-3">
        <AlertCircle className="w-5 h-5 text-error-500" />
        <p className="text-error-700 font-medium">{message}</p>
      </div>
    </div>
  );
}
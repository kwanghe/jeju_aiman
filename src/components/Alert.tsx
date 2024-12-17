import React from 'react';
import { XCircleIcon } from 'lucide-react';

interface AlertProps {
  message: string;
  onClose: () => void;
}

export const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <XCircleIcon className="w-6 h-6" />
        </button>
        <div className="text-center">
          <XCircleIcon className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">알림</h3>
          <p className="text-gray-500">{message}</p>
          <button
            onClick={onClose}
            className="mt-4 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Coffee } from 'lucide-react';

export const Header = () => (
  <header className="bg-white dark:bg-gray-800 shadow-sm">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Coffee className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Hampton Roads Coffee Directory</h1>
      </div>
    </div>
  </header>
);
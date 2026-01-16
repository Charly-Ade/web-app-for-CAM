import React from 'react';
import { MessageCircle } from 'lucide-react';

const CustomerService = () => {
  const handleClick = () => {
    alert('Customer service feature - Connect this to your support system!');
  };

  return (
    <button 
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-30 w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-110"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default CustomerService;
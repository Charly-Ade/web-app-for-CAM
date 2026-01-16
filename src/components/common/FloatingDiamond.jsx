import React from 'react';
import { Diamond } from 'lucide-react';

const FloatingDiamond = ({ delay = 0, duration = 20 }) => {
  const style = {
    animation: `float ${duration}s ease-in-out ${delay}s infinite`,
    position: 'absolute',
    opacity: 0.1
  };
  
  return (
    <div style={style} className="text-blue-300">
      <Diamond size={60} fill="currentColor" />
    </div>
  );
};

export default FloatingDiamond;
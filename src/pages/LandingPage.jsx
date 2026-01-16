import React from 'react';
import { Diamond } from 'lucide-react';
import FloatingDiamond from '../components/common/FloatingDiamond';

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden relative">
      {/* Animated Diamonds Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <FloatingDiamond delay={i * 2} duration={20 + i * 2} />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="diamond-3d mb-8">
          <Diamond size={120} className="text-blue-300" fill="currentColor" />
        </div>
        <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
          CAM
        </h1>
        <p className="text-2xl mb-8 text-blue-200">Your Premier Web3 Wallet Dashboard</p>
        <p className="text-lg mb-12 text-blue-300 max-w-2xl text-center">
          Securely manage your crypto assets, track NFTs, and seamlessly interact with the decentralized web
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => onNavigate('signup')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105"
          >
            Get Started
          </button>
          <button
            onClick={() => onNavigate('login')}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
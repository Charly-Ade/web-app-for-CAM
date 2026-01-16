import React from 'react';
import { Wallet, LogOut, Copy, Check, Menu, X, Diamond } from 'lucide-react';

const Header = ({ 
  walletAddress, 
  network, 
  setNetwork, 
  onConnectWallet, 
  onDisconnect,
  copied,
  onCopy,
  menuOpen,
  setMenuOpen,
  isConnecting
}) => {
  return (
    <header className="relative z-20 bg-white/5 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Diamond size={32} className="text-blue-300" fill="currentColor" />
            <span className="text-2xl font-bold">CAM</span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <select
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white"
            >
              <option value="ethereum">Ethereum</option>
              <option value="polygon">Polygon</option>
              <option value="bsc">BSC</option>
            </select>

            {walletAddress ? (
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/20">
                <span className="text-sm">
                  {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                </span>
                <button 
                  onClick={onCopy} 
                  className="hover:text-blue-300 transition-colors"
                  title="Copy address"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
                <button 
                  onClick={onDisconnect} 
                  className="hover:text-red-400 transition-colors"
                  title="Disconnect"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <button
                onClick={onConnectWallet}
                disabled={isConnecting}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isConnecting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Connecting...
                  </>
                ) : (
                  <>
                    <Wallet size={18} />
                    Connect Wallet
                  </>
                )}
              </button>
            )}
          </div>

          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden text-white"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <select
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
            >
              <option value="ethereum">Ethereum</option>
              <option value="polygon">Polygon</option>
              <option value="bsc">BSC</option>
            </select>
            {!walletAddress && (
              <button
                onClick={onConnectWallet}
                disabled={isConnecting}
                className="w-full flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold disabled:opacity-50"
              >
                {isConnecting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Connecting...
                  </>
                ) : (
                  <>
                    <Wallet size={18} />
                    Connect Wallet
                  </>
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
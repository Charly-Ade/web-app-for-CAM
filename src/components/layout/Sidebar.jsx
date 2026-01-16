import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold">CAM</h2>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/transactions" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Transactions
            </Link>
          </li>
          <li>
            <Link to="/nfts" className="block py-2 px-4 hover:bg-gray-700 rounded">
              NFTs
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
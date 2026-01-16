import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">CAM Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Welcome</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';

const Header = ({ staffName }) => {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-black py-6 px-6 border-b border-purple-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Service Dashboard</h1>
          <p className="text-purple-300 mt-1">Manage vehicle services and repairs</p>
        </div>
        <div className="text-right">
          <p className="text-white text-lg font-semibold">{staffName}</p>
          <p className="text-purple-300 text-sm">Mechanic</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

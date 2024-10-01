import React from 'react';
import { NavLink } from 'react-router-dom';
import { data } from '../data/data';

const Sidebar = () => {
  return (
    <div className="fixed w-64 h-screen bg-gray-900 text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">100x Dev</h1>
      </div>
      
      {/* Navigation Items */}
      <nav className="mt-6">
        {data.navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="block py-2.5 px-4 hover:bg-gray-700 transition duration-200"
            activeClassName="bg-gray-800"
          >
            {item.icon} {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

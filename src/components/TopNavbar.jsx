import React from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../data/data';

const TopNavbar = () => {
  const location = useLocation();

  
  const currentRoute = data.navItems.find(item => item.path === location.pathname);
  const currentTitle = currentRoute ? currentRoute.name : 'Dashboard';

  return (
    <div className="flex items-center justify-between bg-white shadow-md px-6 py-3">
      {/* Left side - Dynamic heading */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">{currentTitle}</h2>
      </div>

   
      <div className="flex items-center space-x-4">
    
        <div>
          <p className="font-semibold text-gray-800">{data.userProfile.name}</p>
        </div>
        <img
          src={data.userProfile.profileImage}
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        
      </div>
    </div>
  );
};

export default TopNavbar;

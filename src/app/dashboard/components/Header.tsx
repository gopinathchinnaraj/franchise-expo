'use client';

import { useState, useEffect } from 'react';
import { 
  BellIcon, 
  Bars3Icon, 
  ArrowRightOnRectangleIcon, 
  UserIcon, 
  ChevronDownIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import { logout, getExhibitorData } from '@/lib/exhibitorAuth';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [exhibitor, setExhibitor] = useState<any>(null);

  useEffect(() => {
    setExhibitor(getExhibitorData());
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="sticky top-0 z-40 h-16 bg-white/95 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="p-2 hover:bg-gray-100 rounded-xl lg:hidden text-gray-500 transition-colors"
          onClick={onMenuClick}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        
        <div className="hidden md:flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-sm text-gray-600 font-medium">
            Welcome back, <span className="text-gray-900 font-semibold">{exhibitor?.name || 'Exhibitor'}</span>
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 hover:bg-gray-100 rounded-xl text-gray-500 hover:text-gray-900 transition-all">
          <BellIcon className="h-6 w-6" />
          <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 bg-red-500 rounded-full ring-2 ring-white" />
        </button>
        
        <div className="h-8 w-px bg-gray-200"></div>

        {/* User Menu Profile Dropdown */}
        <div className="relative" id="user-menu">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-3 px-3 py-1.5 rounded-xl hover:bg-gray-100 transition-all group"
          >
            <div className="relative">
              <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-sm">
                {exhibitor?.name ? exhibitor.name.substring(0, 2).toUpperCase() : 'EX'}
              </div>
              <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-emerald-500 border border-white"></div>
            </div>
            <div className="hidden lg:block text-left">
              <p className="text-sm font-semibold text-gray-900">{exhibitor?.company || 'Exhibitor Portal'}</p>
              <p className="text-xs text-gray-500">Stall Holder</p>
            </div>
            <ChevronDownIcon className="h-4 w-4 text-gray-500 group-hover:text-gray-900 transition-colors" />
          </button>

          {/* Dropdown Card */}
          {userMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl py-2 animate-fade-in z-50">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-900 truncate">{exhibitor?.name}</p>
                <p className="text-xs text-gray-500 truncate">{exhibitor?.email}</p>
              </div>
              <button 
                onClick={() => window.location.href = '/dashboard/exhibitor'} 
                className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <UserIcon className="h-4 w-4" />
                My Profile
              </button>
              <button 
                onClick={() => window.location.href = '/dashboard/stall'} 
                className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <Cog6ToothIcon className="h-4 w-4" />
                Stall Settings
              </button>
              <div className="px-4 py-2 border-t border-gray-100 mt-2">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 text-sm text-red-600 hover:text-red-700 py-2 hover:bg-red-50/50 rounded-lg transition-colors"
                >
                  <ArrowRightOnRectangleIcon className="h-4 w-4" />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
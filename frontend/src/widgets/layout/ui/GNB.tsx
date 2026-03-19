import React, { useState, useEffect } from 'react';
import { Briefcase, Search, Bell, User } from 'lucide-react';
import { mockPubSub } from '../../../shared/lib/mockPubSub';

export const GNB: React.FC = () => {
  const [scrapCount, setScrapCount] = useState(0);
  const [hasNewNotification, setHasNewNotification] = useState(false);

  useEffect(() => {
    // Subscribe to scrap events to update badge reactively
    const unsubScrapAdd = mockPubSub.subscribe('JOB_SCRAPPED', () => {
      setScrapCount(prev => prev + 1);
    });
    
    // Subscribe to notifications
    const unsubNotification = mockPubSub.subscribe('NOTIFICATION_RECEIVED', () => {
      setHasNewNotification(true);
    });

    return () => {
      unsubScrapAdd();
      unsubNotification();
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[var(--color-border)] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="text-2xl font-bold text-[var(--color-primary)]">
              MEDiJOB<span className="text-[var(--color-secondary)]">-Ai</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl px-12 hidden md:flex">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="어떤 직무, 병원을 찾으시나요?"
                className="w-full pl-4 pr-10 py-2.5 rounded-full border-2 border-[var(--color-primary)] focus:outline-hidden focus:border-[var(--color-primary-light)] transition-colors text-sm"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-primary)] p-1 hover:text-[var(--color-primary-light)]">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-[var(--color-primary)] transition-colors hidden md:flex flex-col items-center">
              <User size={24} strokeWidth={1.5} />
              <span className="text-[10px] mt-1 font-medium">마이페이지</span>
            </button>
            
            <button className="text-gray-600 hover:text-[var(--color-primary)] transition-colors relative flex flex-col items-center">
              <div className="relative">
                <Bell size={24} strokeWidth={1.5} />
                {hasNewNotification && (
                  <span className="absolute 0 right-0 top-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
                )}
              </div>
              <span className="text-[10px] mt-1 font-medium">알림</span>
            </button>
            
            <button className="text-gray-600 hover:text-[var(--color-primary)] transition-colors relative flex flex-col items-center">
              <div className="relative">
                <Briefcase size={24} strokeWidth={1.5} />
                {scrapCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-[var(--color-secondary)] rounded-full">
                    {scrapCount > 99 ? '99+' : scrapCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-1 font-medium">스크랩</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

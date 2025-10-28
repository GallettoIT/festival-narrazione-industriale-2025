'use client';

import { useState, useRef, useEffect } from 'react';
import {
  getGoogleCalendarUrl,
  getOutlookUrl,
  getYahooCalendarUrl,
  downloadICSFile,
  detectOS,
  type CalendarEvent
} from '@/utils/calendarUtils';

interface AddToCalendarButtonProps {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

export default function AddToCalendarButton({
  title,
  description,
  location,
  startDate,
  endDate
}: AddToCalendarButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const event: CalendarEvent = {
    title,
    description,
    location,
    startDate,
    endDate
  };

  const os = typeof window !== 'undefined' ? detectOS() : 'other';

  // Chiudi dropdown quando si clicca fuori
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleAddToCalendar = (type: 'google' | 'outlook' | 'yahoo' | 'apple' | 'ics') => {
    switch (type) {
      case 'google':
        window.open(getGoogleCalendarUrl(event), '_blank');
        break;
      case 'outlook':
        window.open(getOutlookUrl(event), '_blank');
        break;
      case 'yahoo':
        window.open(getYahooCalendarUrl(event), '_blank');
        break;
      case 'apple':
      case 'ics':
        downloadICSFile(event);
        break;
    }
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Icona calendario minimalista - responsive */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group p-1 transition-all duration-200 hover:scale-110"
        aria-label="Aggiungi al calendario"
        title="Aggiungi al calendario"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px] text-[#282828] group-hover:text-fni-red transition-colors duration-200"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
        </svg>
      </button>

      {/* Dropdown menu - design FNI responsive */}
      {isOpen && (
        <div className="absolute left-auto right-0 md:left-0 md:right-auto mt-2 w-[180px] sm:w-[200px] md:w-[240px] bg-white border-2 border-[#282828] z-50">
          {/* Google Calendar */}
          <button
            onClick={() => handleAddToCalendar('google')}
            className="w-full text-left px-3 md:px-4 py-2.5 md:py-3 text-[#282828] hover:bg-fni-red hover:text-white font-halenoir-regular text-[11px] sm:text-[12px] md:text-[14px] uppercase transition-colors duration-150 border-b border-[#282828]"
          >
            Google Calendar
          </button>

          {/* Apple Calendar - solo su iOS/Mac */}
          {(os === 'ios' || os === 'mac') && (
            <button
              onClick={() => handleAddToCalendar('apple')}
              className="w-full text-left px-3 md:px-4 py-2.5 md:py-3 text-[#282828] hover:bg-fni-red hover:text-white font-halenoir-regular text-[11px] sm:text-[12px] md:text-[14px] uppercase transition-colors duration-150 border-b border-[#282828]"
            >
              Apple Calendar
            </button>
          )}

          {/* Outlook */}
          <button
            onClick={() => handleAddToCalendar('outlook')}
            className="w-full text-left px-3 md:px-4 py-2.5 md:py-3 text-[#282828] hover:bg-fni-red hover:text-white font-halenoir-regular text-[11px] sm:text-[12px] md:text-[14px] uppercase transition-colors duration-150"
          >
            Outlook
          </button>
        </div>
      )}
    </div>
  );
}

'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

type ScrollAction = {
  section: string;
  timestamp: number;
}

type ScrollContextType = {
  scrollAction: ScrollAction | null;
  setScrollAction: React.Dispatch<React.SetStateAction<ScrollAction | null>>;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

type ScrollProviderProps = {
  children: ReactNode;
};

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [scrollAction, setScrollAction] = useState<ScrollAction | null>(null);

  return (
    <ScrollContext.Provider value={{ scrollAction, setScrollAction }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};
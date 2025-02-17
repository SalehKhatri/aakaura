"use client";
import { createContext, useState, useContext } from "react";

interface SplashScreenContextType {
  hasSeenSplash: boolean;
  setHasSeenSplash: (value: boolean) => void;
}

const SplashScreenContext = createContext<SplashScreenContextType | undefined>(undefined);

export function SplashScreenProvider({ children }: { children: React.ReactNode }) {
  const [hasSeenSplash, setHasSeenSplash] = useState(false);

  return (
    <SplashScreenContext.Provider value={{ hasSeenSplash, setHasSeenSplash }}>
      {children}
    </SplashScreenContext.Provider>
  );
}

export function useSplashScreen() {
  const context = useContext(SplashScreenContext);
  if (!context) {
    throw new Error("useSplashScreen must be used within a SplashScreenProvider");
  }
  return context;
}

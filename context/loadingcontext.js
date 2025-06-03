'use client';

import { createContext, useState, useContext, useEffect } from 'react';

const LoadingContext = createContext(null);

export const LoadingProvider = ({ children, totalComponents }) => {
  const [loadedComponents, setLoadedComponents] = useState(0);

  const setComponentLoaded = () => {
    setLoadedComponents(prev => {
      console.log(`Component loaded: ${prev + 1}/${totalComponents}`);
      return prev + 1;
    });
  };

  const loading = loadedComponents < totalComponents;

  // Debug when context is mounted
  useEffect(() => {
    console.log("🔁 LoadingProvider mounted with totalComponents:", totalComponents);
  }, []);

  return (
    <LoadingContext.Provider value={{ setComponentLoaded, loading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);

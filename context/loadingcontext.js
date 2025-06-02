'use client';

import { createContext, useState, useContext } from 'react';

const LoadingContext = createContext(null);

export const LoadingProvider = ({ children, totalComponents }) => {
  const [loadedComponents, setLoadedComponents] = useState(0);

  const setComponentLoaded = () => {
    setLoadedComponents(prev => prev + 1);
  };

  const loading = loadedComponents < totalComponents;

  return (
    <LoadingContext.Provider value={{ setComponentLoaded, loading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);

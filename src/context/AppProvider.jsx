/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext } from 'react';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const info = {
    data: 'hello',
  };

  return (
    <AppContext.Provider value={info}>
      {children}
    </AppContext.Provider>
  );
}

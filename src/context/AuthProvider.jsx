/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const authInfo = {
    name: 'variable',
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

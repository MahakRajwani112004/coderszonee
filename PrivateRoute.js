// import React, { createContext, useState, useContext, useEffect } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Check local storage or make an API call to determine authentication status
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const login = () => setIsAuthenticated(true);
//   const logout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem('token');
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth'; // Assuming you have auth.js for auth logic

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;

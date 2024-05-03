// import React, { useState, useEffect } from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import axios from 'axios';

// const PrivateRoute = ({ path, element }) => {
//  const [isLoggedIn, setIsLoggedIn] = useState(false);
//  const [loading, setLoading] = useState(true);

//  useEffect(() => {
//     const checkAuthStatus = async () => {
//       try {
//         const response = await axios.get('/api/user/status');
//         setIsLoggedIn(response.data.isLoggedIn);
//       } catch (error) {
//         console.error('Error checking authentication status:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkAuthStatus();
//  }, []);

//  if (loading) {
//     return <div>Loading...</div>; // Or a loading spinner
//  }

//  return (
//     <Route path={path} element={isLoggedIn ? element : <Navigate to="/" replace />} />
//  );
// };

// export default PrivateRoute;
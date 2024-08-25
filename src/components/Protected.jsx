import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../sections/AuthContext';

export function Protected({ children }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [navigate, user]);

  return <>{user ? children : null}</>;
}

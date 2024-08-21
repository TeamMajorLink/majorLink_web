import React, { useState, useEffect } from 'react';
import { HeaderBeforeLogin } from './HeaderBeforeLogin';
import { HeaderAfterLogin } from './HeaderAfterLogin';

export function HeaderComponent() {
  const [isLogined, setIsLogined] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (token && token !== 'null') {
      setIsLogined(true);
      setAuthToken(token);
    } else {
      setIsLogined(false);
      setAuthToken(null);
    }
  }, []);

  return isLogined ? (
    <HeaderAfterLogin authToken={authToken} />
  ) : (
    <HeaderBeforeLogin />
  );
}

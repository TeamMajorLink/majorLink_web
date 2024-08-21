import React, { useState, useEffect } from 'react';
import { HeaderBeforeLogin } from './HeaderBeforeLogin';
import { HeaderAfterLoginNNN } from './HeaderAfterLoginNNN';

export function HeaderComponentNNN() {
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
    <HeaderAfterLoginNNN authToken={authToken} />
  ) : (
    <HeaderBeforeLogin />
  );
}

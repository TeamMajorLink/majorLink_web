import React, { useState, useEffect } from 'react';
import { HeaderBeforeLogin } from './HeaderBeforeLogin';
import { HeaderAfterLogin } from './HeaderAfterLogin';

export function HeaderComponent() {
  const authToken = localStorage.getItem('authToken');
  const [isLogined, setIsLogined] = useState(false);

  useEffect(() => {
    if (authToken && authToken !== 'null') {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }, [authToken]);

  return isLogined ? <HeaderAfterLogin /> : <HeaderBeforeLogin />;
}

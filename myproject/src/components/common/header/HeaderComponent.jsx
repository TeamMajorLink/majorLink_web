import React, { useState, useEffect } from 'react';
import { HeaderBeforeLogin } from './HeaderBeforeLogin';
import { HeaderAfterLogin } from './HeaderAfterLogin';

export function HeaderComponent() {
  const [isLogined, setIsLogined] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    if (authToken && authToken !== 'null') {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }, []);

  return isLogined ? <HeaderAfterLogin /> : <HeaderBeforeLogin />;
}

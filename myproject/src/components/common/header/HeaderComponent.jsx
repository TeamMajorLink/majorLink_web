import React from 'react';
// import React, { useState } from 'react';
import { HeaderBeforeLogin } from './HeaderBeforeLogin';
import { HeaderAfterLogin } from './HeaderAfterLogin';

export function HeaderComponent() {
  // 수정 예정
  // const [isLogined, setIsLogined] = useState(false);
  const isLogined = false;

  return isLogined ? <HeaderAfterLogin /> : <HeaderBeforeLogin />;
}

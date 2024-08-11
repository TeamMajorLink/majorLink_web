import React from 'react';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
// import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';

// const GlobalStyle = createGlobalStyle`
//   ${reset}
// `;

function App() {
  return (
    <div>
      <HomePage/>
      
      <Login />
    </div>
  );
}

export default App;

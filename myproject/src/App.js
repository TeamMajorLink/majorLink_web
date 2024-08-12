import React from 'react';
import HomePage from './pages/HomePage';
import Footer from './components/footer';
// import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';

// const GlobalStyle = createGlobalStyle`
//   ${reset}
// `;

function App() {
  return (
    <div className = 'wrapper'>
      <div className='contentWrapper'>
      <HomePage/>
      
      </div>
        <Footer/>
    </div>
  );
}

export default App;

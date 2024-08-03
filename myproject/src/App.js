import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <h2>앱입니다.</h2>
    </div>
  );
}

export default App;

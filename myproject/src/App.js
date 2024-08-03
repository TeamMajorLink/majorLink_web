import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
//
import { ClassThumbnail } from './components/class/classComponent/ClassThumbnail';
//

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <h2>앱입니다.</h2>
      {/* test */}
      <ClassThumbnail />
    </div>
  );
}

export default App;

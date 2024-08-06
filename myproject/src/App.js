import React from 'react';
// import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';
// 삭제
import { ClassList } from './components/class/classComponent/ClassList';
import { SearchBackground } from './components/class/search/SearchBackground';
//

// const GlobalStyle = createGlobalStyle`
//   ${reset}
// `;

function App() {
  return (
    <div>
      <h2>앱입니다.</h2>
      {/* 삭제 */}
      <SearchBackground />
      <ClassList />
    </div>
  );
}

export default App;

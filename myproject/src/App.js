import React from 'react';
// import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';
// 삭제
import { ClassList } from './components/class/classComponent/ClassList';
import { SearchSection } from './components/class/search/SearchSection';
//

// const GlobalStyle = createGlobalStyle`
//   ${reset}
// `;

function App() {
  return (
    <div>
      <h2>앱입니다.</h2>
      {/* 삭제 */}
      <SearchSection />
      <ClassList />
    </div>
  );
}

export default App;

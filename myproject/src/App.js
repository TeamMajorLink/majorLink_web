import React from 'react';
// import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';
// 삭제
import { ClassList } from './components/class/classComponent/ClassList';
import { SearchSection } from './components/class/search/SearchSection';
// import { SubHeader } from './components/class/subHeader/SubHeader';
import { Pagination } from './components/class/pageNation/Pagination';
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
      <Pagination />
      {/* <SubHeader /> */}
    </div>
  );
}

export default App;

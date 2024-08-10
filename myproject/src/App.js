import React from 'react';
// import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';
// 삭제
import { styled } from 'styled-components';
import { ClassList } from './components/class/classComponent/ClassList';
import { SearchSection } from './components/class/search/SearchSection';
// import { SubHeader } from './components/class/subHeader/SubHeader';
import { Pagination } from './components/class/pagination/Pagination';
import { FilterArray } from './components/class/filterArray/FilterArray';
//

// const GlobalStyle = createGlobalStyle`
//   ${reset}
// `;

// 아래 삭제
const PageContainer = styled.div`
  margin: 0;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <div>
      {/* <h2>앱입니다.</h2> */}
      {/* 삭제 */}
      <PageContainer>
        <SearchSection />
        <FilterArray />
        <ClassList />
        <Pagination />
      </PageContainer>
      {/* <SubHeader /> */}
    </div>
  );
}

export default App;

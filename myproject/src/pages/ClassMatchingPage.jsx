import React from 'react';
import { styled } from 'styled-components';
import { SearchSection } from '../components/classMatching/search/SearchSection';
import { FilterArray } from '../components/classMatching/filterArray/FilterArray';
import { ClassList } from '../components/classMatching/classComponent/ClassList';
import { Pagination } from '../components/classMatching/pagination/Pagination';
import { HeaderComponent } from '../components/common/header/HeaderComponent';

const PageContainer = styled.div`
  margin: 0;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function ClassMatchingPage() {
  return (
    <div>
      <HeaderComponent />
      <PageContainer>
        <SearchSection />
        <FilterArray />
        <ClassList />
        <Pagination />
      </PageContainer>
    </div>
  );
}

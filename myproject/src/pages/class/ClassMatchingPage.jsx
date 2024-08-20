import React from 'react';
import { styled } from 'styled-components';
import { SearchSection } from '../../components/class/classMatching/search/SearchSection';
import { FilterArray } from '../../components/class/classMatching/filterArray/FilterArray';
import { ClassList } from '../../components/class/classMatching/classComponent/ClassList';
import { Pagination } from '../../components/class/classMatching/pagination/Pagination';
import { HeaderComponent } from '../../components/common/header/HeaderComponent';

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
        {/* 클래스 컴포넌트 */}
        <ClassList />
        <Pagination />
      </PageContainer>
    </div>
  );
}

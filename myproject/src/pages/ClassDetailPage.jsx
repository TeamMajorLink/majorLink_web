import React from 'react';
import { styled } from 'styled-components';
import { HeaderComponent } from '../components/common/header/HeaderComponent';
import { ClassDetailTitle } from '../components/classDetail/ClassDetailTitle';

const PageContainer = styled.div`
  margin: 0;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function ClassDetailPage() {
  return (
    <div>
      <HeaderComponent />
      <PageContainer>
        <ClassDetailTitle />
      </PageContainer>
    </div>
  );
}

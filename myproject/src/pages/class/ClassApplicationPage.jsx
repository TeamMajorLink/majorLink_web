import React from 'react';
import { styled } from 'styled-components';
import { HeaderComponent } from '../../components/common/header/HeaderComponent';
import { ClassApplicationComponent } from '../../components/class/classApplication/ClassApplicationComponent';

const PageContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function ClassApplicationPage() {
  return (
    <div>
      <PageContainer>
        <HeaderComponent />
        <ClassApplicationComponent />
      </PageContainer>
    </div>
  );
}

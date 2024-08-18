import React from 'react';
import { styled } from 'styled-components';
import { ApiTestReadComponent } from './ApiTestReadComponent';

const PageContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export function ApiTestReadPage() {
  return (
    <PageContainer>
      <ApiTestReadComponent lectureId="1" />
    </PageContainer>
  );
}

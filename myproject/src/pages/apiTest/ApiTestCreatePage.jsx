import React from 'react';
import { styled } from 'styled-components';
import { ApiTestCreateComponent } from './ApiTestCreateComponent';

const PageContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export function ApiTestCreatePage() {
  return (
    <PageContainer>
      <ApiTestCreateComponent lectureId="101" />
    </PageContainer>
  );
}

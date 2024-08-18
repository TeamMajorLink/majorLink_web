import React from 'react';
import { styled } from 'styled-components';
import { ApiTestLoginNaverButton } from './ApiTestLoginNaverButton';

const PageContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export function ApiTestLoginPage() {
  return (
    <PageContainer>
      <ApiTestLoginNaverButton />
    </PageContainer>
  );
}

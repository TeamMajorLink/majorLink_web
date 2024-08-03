import React from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './App.css';

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <div>
          <GlobalStyle />
          <h2>앱입니다.</h2>
        </div>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;

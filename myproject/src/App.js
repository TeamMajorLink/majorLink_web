import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './App.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h3>dddd</h3>
      <h3>dddd</h3>
      <h3>dddd</h3>
    </div>
  );
}

export default App;

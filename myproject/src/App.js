import React from 'react';
// import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';
// 삭제
import { ClassThumbnail } from './components/class/classComponent/ClassThumbnail';
import { ClassStarRating } from './components/class/classComponent/ClassStarRating';
import { ClassHeadcount } from './components/class/classComponent/ClassHeadcount';
//

// const GlobalStyle = createGlobalStyle`
//   ${reset}
// `;

function App() {
  return (
    <div>
      <h2>앱입니다.</h2>
      {/* 삭제 */}
      <ClassThumbnail />
      <ClassStarRating />
      <ClassHeadcount />
    </div>
  );
}

export default App;

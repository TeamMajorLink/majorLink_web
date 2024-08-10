// import { createGlobalStyle } from "styled-components";
import { styled } from 'styled-components';
import { ClassComponent } from './ClassComponent';

const GridList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  /* 수정 필요 */
  margin-bottom: 60px;
  width: 1584px;
`;

export function ClassList() {
  return (
    <GridList>
      <ClassComponent />
      <ClassComponent />
      <ClassComponent />
      <ClassComponent />
      <ClassComponent />
      <ClassComponent />
      <ClassComponent />
      <ClassComponent />
      <ClassComponent />
    </GridList>
  );
}

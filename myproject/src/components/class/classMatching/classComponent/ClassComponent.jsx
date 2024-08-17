// import { createGlobalStyle } from "styled-components";
import { styled } from 'styled-components';
import { ClassThumbnail } from './thumbnail/ClassThumbnail';
import { ClassInfoBox } from './classInfo/ClassInfoBox';
import color from '../../../../styles/color';

const ComponentContainer = styled.div`
  margin: 36px 24px;
  width: 480px;
  height: 472px;

  border: 1px solid ${() => color.grayscale_ea};
  border-radius: 20px;

  overflow: hidden;
  cursor: pointer;
`;

export function ClassComponent() {
  return (
    <ComponentContainer>
      <ClassThumbnail />
      <ClassInfoBox />
    </ComponentContainer>
  );
}

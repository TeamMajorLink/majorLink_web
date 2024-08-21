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

export function ClassComponent({ lecture }) {
  console.log(`강의 ID: ${lecture.lectureId}`);

  return (
    <ComponentContainer>
      <ClassThumbnail />
      <h3>{lecture.lectureId}</h3>
      <ClassInfoBox lecture={lecture} />
    </ComponentContainer>
  );
}

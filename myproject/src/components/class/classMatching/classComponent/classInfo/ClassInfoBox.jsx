// import { createGlobalStyle } from "styled-components";
import { styled, css } from 'styled-components';
import color from '../../../../../styles/color';
import font from '../../../../../styles/font';
import { ClassSubInfo } from './ClassSubInfo';
import { ClassStarRating } from './ClassStarRating';
import { ClassHeadcount } from './ClassHeadcount';
import MajorIcon16 from '../../../../../assets/class/class_icon_major_16x16.png';
import LevelIcon16 from '../../../../../assets/class/class_icon_level_16x16.png';
import LectureIcon16 from '../../../../../assets/class/class_icon_lecture_16x16.png';
import TimeIcon16 from '../../../../../assets/class/class_icon_time_16x16.png';

const TutorName = styled.p`
  margin: 0;
  padding: 0;

  color: ${() => color.grayscale_55};
  ${() => font.regular_16};
`;
const LectureName = styled.p`
  margin: 0 0 16px 0;
  padding: 0;

  ${() => font.semibold_20};
`;
const Line = styled.div`
  margin: 0 0 16px 0;
  padding: 0;
  width: 440px;

  height: 1px;
  background-color: ${() => color.grayscale_ea};
`;
const Container = css`
  margin: 0 0 12px 0;
  padding: 0;
  width: 440px;

  display: flex;
  align-items: center;
`;
const ContainerFlexStart = styled.div`
  ${Container}
  justify-content: flex-start;
`;
const ContainerFlexBetween = styled.div`
  ${Container}
  justify-content: space-between;
`;
const ContainerAllInfo = styled.div`
  margin: 20px;
  padding: 0;
  width: 440px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export function ClassInfoBox({ lecture }) {
  console.log(lecture);

  return (
    <ContainerAllInfo>
      <ContainerFlexBetween>
        <TutorName>by 링키</TutorName>
        <ClassStarRating />
      </ContainerFlexBetween>
      <LectureName>{lecture.name}</LectureName>

      <ContainerFlexStart>
        <ClassSubInfo
          img={MajorIcon16}
          content={`${lecture.mainCategory} > ${lecture.subCategory}`}
        />
        <ClassSubInfo img={LevelIcon16} content="초급" />
        <ClassSubInfo img={LectureIcon16} content="11차시" />
      </ContainerFlexStart>
      <Line />

      <ContainerFlexBetween>
        <ClassSubInfo img={TimeIcon16} content="협의 가능" />
        <ClassHeadcount cnum={lecture.cnum} pnum={lecture.pnum} />
      </ContainerFlexBetween>
    </ContainerAllInfo>
  );
}

import React from 'react';
import styled from 'styled-components';
import font from "../../styles/font";
import color from "../../styles/color";

const TitleContainer = styled.div`

`;

const Line = styled.hr`
  display: flex;
  width: 120.8rem;
  margin: 5rem 0 2.3rem 0; // 위쪽: 미정입니다...
  border: 0.7rem solid ${() => color.line};
`;

const Title = styled.p`
  font: ${() => font.semibold_28};
  color: ${() => color.primary_dark};
  text-align: start;
  margin-bottom: 0.8rem;
  margin-left: 5rem;
`;

function ProfileTitle({title}) {
    return (
            <TitleContainer>
                <Line />
                <Title>{title}</Title>
            </TitleContainer>
    );
}

export default ProfileTitle
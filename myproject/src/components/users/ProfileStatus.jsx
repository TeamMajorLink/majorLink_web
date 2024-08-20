import React from 'react';
import styled from 'styled-components';
import font from "../../styles/font";
import color from "../../styles/color";

const StatusContainer = styled.div`
  position: relative;
  width: 100.1rem;
  height: 15.8rem;
  padding: 2.9rem 3.7rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // align-items: center;
  border-radius: 1.5rem;
  border: 0.1rem solid ${() => color.grayscale_9d};
`;

const Title = styled.p`
  font: ${() => font.semibold_24};
  color: ${() => color.black};
  // text-align: center;
  margin-bottom: 0.8rem;
`;

const Text = styled.p`
  font: ${() => font.regular_12};
  color: ${() => color.black};
  // text-align: center;
  // margin: 0 2rem; 수정하기 - 오류 나는 것 같아서
`;

const BarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;  // To make sure the bars span across the container
  padding: 0 2rem; // Add some padding for better alignment
`;

const StatusBar = styled.div`
  background: ${() => color.grayscale_a3}; // 색상 변경되게
  border-radius: 0.8rem;
  width: 17.3rem;
  height: 1.1rem;
  margin-right: 0.5rem;
  
  &:last-child {
    margin-right: 0; // Remove the margin on the last item
  }
`;

const Percent = styled.p`
  font: ${() => font.profilecard};
  color: ${() => color.black};
  position: absolute;
  right: 2rem; // Adjusts the position of the percentage text
  top: 65%; // Vertically align it to be close to the bars
  transform: translateY(-50%);
`;

function ProfileStatus() {
    return (
            <StatusContainer>
                <Title>프로필 완성도</Title>
                <Text>프로필 100% 완성 시 포인트를 지급해드립니다.</Text>

                <BarContainer>
                    <StatusBar />
                    <StatusBar />
                    <StatusBar />
                    <StatusBar />
                    <StatusBar />
                  <Percent>20%</Percent>
                </BarContainer>

            </StatusContainer>
    );
}

export default ProfileStatus
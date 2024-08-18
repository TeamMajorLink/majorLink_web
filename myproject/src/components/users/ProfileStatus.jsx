import React from 'react';
import styled from 'styled-components';
import font from "../../styles/font";
import color from "../../styles/color";

const StatusContainer = styled.div`
  position: relative;
  width: 1001px;
  height: 158px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  border: 1px solid ${() => color.grayscale_9d};
`;

const Title = styled.p`
  font: ${() => font.semibold_24};
  color: ${() => color.black};
  text-align: center;
  margin-bottom: 8px;
`;

const Text = styled.p`
  font: ${() => font.regular_12};
  color: ${() => color.black};
  text-align: center;
  margin-bottom: 20px;
`;

const BarGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;  // To make sure the bars span across the container
  padding: 0 20px; // Add some padding for better alignment
`;

const StatusBar = styled.div`
  background: ${() => color.grayscale_a3}; // 색상 변경되게
  border-radius: 8px;
  width: 173px;
  height: 11px;
  margin-right: 5px;
  
  &:last-child {
    margin-right: 0; // Remove the margin on the last item
  }
`;

const Percent = styled.p`
  font: ${() => font.percent};
  color: ${() => color.black};
  position: absolute;
  right: 20px; // Adjusts the position of the percentage text
  top: 65%; // Vertically align it to be close to the bars
  transform: translateY(-50%);
`;

function ProfileStatus() {
    return (
            <StatusContainer>
                <Title>프로필 완성도</Title>
                <Text>프로필 100% 완성 시 포인트를 지급해드립니다.</Text>

                <BarGroup>
                    <StatusBar />
                    <StatusBar />
                    <StatusBar />
                    <StatusBar />
                    <StatusBar />
                </BarGroup>
                <Percent>20%</Percent>

            </StatusContainer>
    );
}

export default ProfileStatus
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { css, styled } from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';

const ComponentContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
`;
const BackgroundGray = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${() => color.grayscale_45percent};

  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContainer = styled.div`
  padding: 8.8rem;
  width: 108rem;
  height: 56rem;

  /* position: absolute;
  left: calc(50vw - 54rem);
  top: calc(50vh - 28rem); */

  background-color: ${() => color.white};
  border-radius: 2.4rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const ModalTitleText = styled.p`
  margin: 0 0 4.4rem 0;

  color: ${() => color.primary_dark};
  ${() => font.semibold_48};
`;
const ModalContent = styled.p`
  margin: 0 0 7.6rem 0;

  line-height: 4.8rem;
  text-align: center;
  ${() => font.regular_32};
`;
const ButtonContainer = styled.div`
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonStyle = css`
  margin: 0 2.4rem;
  padding: 0 5.2rem;
  height: 9.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 2rem;
  ${() => font.semibold_32};

  cursor: pointer;
`;
const CancelButton = styled.button`
  ${ButtonStyle}
  background-color: ${() => color.grayscale_f0};
  color: ${() => color.grayscale_80};
`;
const ConfirmButton = styled.button`
  ${ButtonStyle}
  background-color: ${() => color.primary_normal};
  color: ${() => color.white};
`;

export function ClassApplicationModal({ closeModal, lectureId = 1 }) {
  const navigate = useNavigate();
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    setAuthToken(localStorage.getItem('authToken'));
  }, []);

  const handleLectureRegister = async () => {
    if (!authToken) {
      console.error('authToken이 없습니다.');
    } else {
      console.log(`lectureId: ${lectureId}`);
      console.log(`authToken: ${authToken}`);
    }

    const url = `https://dev.majorlink.store/lecture/${lectureId}/register`;

    try {
      const response = await axios.post(
        url,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': authToken,
          },
        },
      );

      console.log('수강신청 요청 성공:', response.data);
      navigate(`/class/application-completed`);
    } catch (error) {
      if (error.response) {
        // 서버가 응답했으나 상태 코드가 2xx 범위가 아닐 때
        console.error(
          '요청 실패:',
          error.response.status,
          error.response.statusText,
        );
      } else if (error.request) {
        // 요청이 전송되었으나 응답이 없을 때
        console.error('요청 실패: 응답이 없습니다.', error.request);
      } else {
        // 요청을 설정하는 중에 발생한 에러
        console.error('요청 중 에러 발생:', error.message);
      }
    }
  };

  return (
    <ComponentContainer>
      <BackgroundGray>
        <ModalContainer>
          <ModalTitleText>수강신청 하시겠습니까?</ModalTitleText>
          <ModalContent>
            튜터에게 수업 신청서를 보내 수업에 대한 구체적인 요청을 해보세요.
            <br />
            수강 신청 후 튜터가 승인하면 10000포인트가 차감됩니다.
          </ModalContent>
          <ButtonContainer>
            <CancelButton onClick={closeModal}>취소</CancelButton>
            <ConfirmButton onClick={handleLectureRegister}>
              수업 신청서 보내기
            </ConfirmButton>
          </ButtonContainer>
        </ModalContainer>
      </BackgroundGray>
    </ComponentContainer>
  );
}

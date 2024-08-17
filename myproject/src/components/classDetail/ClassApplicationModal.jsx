import { css, styled } from 'styled-components';
import color from '../../styles/color';
import font from '../../styles/font';

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

export function ClassApplicationModal({ closeModal }) {
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
            <ConfirmButton>수업 신청서 보내기</ConfirmButton>
          </ButtonContainer>
        </ModalContainer>
      </BackgroundGray>
    </ComponentContainer>
  );
}
import React from 'react';
import styled from 'styled-components';
import font from "../../styles/font";
import color from "../../styles/color";
import PlusIcon from '../../assets/users/plus-circle-icon.png';

const ButtonComponent = styled.button`
  margin: 0 5.3rem;
  /* padding: 8rem 12rem; */
  width: 20.4rem;
  height: 5.5rem;
  border-radius: 1.5rem;
  border: 0.1rem solid ${() => color.grayscale_9d};
  background-color: ${() => color.white};

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  ${() => font.semibold_20};
  color: ${() => color.white};

  cursor: pointer;
`;

const IconImg = styled.img`
  margin: 0;
  width: 2.4rem;
  height: 2.4rem;
`;

const Text = styled.p`
  font: ${() => font.semibold_22};
  color: ${() => color.primary_dark};
//   margin-left: 5rem;
`;

function AddButton({content}) {
    // const navigate = useNavigate();
    // 아래 이름 변경
    const handleMoveToPagename = () => {
    //   navigate(`/users/profile-card`); // 여기에 경로 수정

    }
  
    return (
      <ButtonComponent onClick={handleMoveToPagename}>
        <IconImg src={PlusIcon} alt="아이콘" />
        <Text>{content}</Text>
      </ButtonComponent>
    );
}

export default AddButton
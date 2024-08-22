import React from 'react';
import styled, { css } from 'styled-components';
import font from "../../styles/font";
import color from "../../styles/color";

const ButtonComponent = styled.button`
  margin: 0 5.3rem;
  padding: 0 4rem;
//   width: 20.4rem;
  border-radius: 0.815rem;
  border: none; //이거맞나

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  color: ${() => color.white};

  white-space: nowrap; /* 텍스트가 줄 바꿈되지 않도록 */
  cursor: pointer;

  ${({ variant }) => variant === 'normal' && css`
    height: 6.482rem;
    background-color: ${() => color.primary_semilight};
    ${() => font.semibold_24};
    color: ${() => color.white};
  `}

  ${({ variant }) => variant === 'cancle' && css`
    height: 7.582rem;
    background-color: ${() => color.grayscale_d9};
    ${() => font.regi_button};
    color: ${() => color.black};
  `}

  ${({ variant }) => variant === 'save' && css`
    height: 7.582rem;
    background-color: ${() => color.primary_semilight};
    ${() => font.regi_button};
    color: ${() => color.white};
  `}

  // .normal{ 
  //   height: 6.482rem;
  //   background-color: ${() => color.primary_semilight};
  //   ${() => font.semibold_24};
  //   color: ${() => color.white};
  // }
  // .cancle{
  //   height: 7.582rem;
  //   background-color: ${() => color.grayscale_d9};
  //   ${() => font.regi_button};
  //   color: ${() => color.black};

        justify-content: end; //테스트
  // }
  // .save{
  //   height: 7.582rem;
  //   background-color: ${() => color.primary_semilight};
  //   ${() => font.regi_button};
  //   color: ${() => color.white};

      justify-content: end; //테스트
  // }
`;

// const Text = styled.p`
//   font: ${() => font.semibold_22};
//   color: ${() => color.primary_dark};
// //   margin-left: 5rem;
// `;

function RegisterButton({variant, content}) {
    // const navigate = useNavigate();
    // 아래 이름 변경
    const handleMoveToPagename = () => {
    //   navigate(`/users/profile-card`); // 여기에 경로 수정

    }
  
    return (
      <ButtonComponent type='button' variant={variant} onClick={handleMoveToPagename}>
        {content}
      </ButtonComponent>
    );
}

export default RegisterButton
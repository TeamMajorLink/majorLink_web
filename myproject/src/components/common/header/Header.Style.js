import { styled, css } from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';

export const HeaderContainer = styled.div`
  margin: 0;
  height: 12.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${() => color.white};

  z-index: 99;
  /* position: sticky;
  top: 0; */
  /* align-self: flex-start; */
`;
export const Container = css`
  display: flex;
  align-items: center;
`;
export const ContainerLeft = styled.div`
  ${Container}
  margin-left: 7.2rem;
  justify-content: flex-start;
`;
export const ContainerRight = styled.div`
  ${Container}
  margin-right: 7.2rem;
  justify-content: flex-end;
`;
// 로고 및 네비게이션 바
export const LogoImgContainer = styled.div`
  margin: 0;
  padding: 0;

  width: 32.8rem;
  height: 9.8rem;

  border: none;
  cursor: pointer;
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
export const NavigationText = styled.p`
  margin: 0 1.2rem 0 3.2rem;
  padding: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.selected ? () => font.semibold_22 : () => font.regular_22};

  color: ${(props) =>
    props.selected ? () => color.primary_dark : () => color.black};

  cursor: pointer;
`;
// BeforeLogin
export const LogInText = styled.p`
  margin: 0 1.2rem;
  padding: 0.8rem 2.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${() => font.regular_18};
  color: ${() => color.black};

  cursor: pointer;
`;
export const SignUpText = styled.p`
  margin: 0 1.2rem;
  padding: 0.8rem 2.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${() => font.regular_18};
  color: ${() => color.primary_normal};

  border: 0.2rem solid ${() => color.primary_normal};
  border-radius: 2rem;

  cursor: pointer;
`;
// AfterLogin
export const IconContainer = styled.div`
  margin: 1.2rem;
  padding: 0;
  width: 3rem;
  height: 3rem;

  border: none;
  border-radius: 50%;
  cursor: pointer;
`;
export const IconImg = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
`;
export const ProfileContainer = styled.div`
  margin-left: 2.4rem;
  padding: 0;
  width: 6.3rem;
  height: 6.3rem;

  border: none;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;
export const ProfileImg = styled.img`
  width: 6.3rem;
  height: 6.3rem;
  object-fit: cover;
`;

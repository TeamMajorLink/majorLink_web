import React from 'react';
import styled from 'styled-components';
import insta from '../../assets/class/footer_icon_insta.png';
import blog from '../../assets/class/footer_icon_blog.png';

const FooterContainer = styled.div`
  background-color: #f8f9fa;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: left;
`;

const FooterSections = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SectionText = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.5rem;
  }
`;

const FooterText = styled.p`
  font-size: 0.875rem;
  color: #6c757d;
  text-align: left;
  margin-bottom: 1rem;
`;

const FooterIcons = styled.div`
  display: flex;
  justify-content: right;
  gap: 1rem;
`;

const FooterIcon = styled.img`
  width: 30px;
  height: 30px;
`;

function Footer() {
  return (
    <FooterContainer>
      <Header>전공을 잇다, 메이저링크</Header>

      <FooterSections>
        <FooterSection>
          <SectionHeader>메이저링크</SectionHeader>
          <SectionText>
            <li>메이저링크 소개</li>
            <li>블로그</li>
            <li>제휴 문의</li>
          </SectionText>
        </FooterSection>
        <FooterSection>
          <SectionHeader>서비스 정책</SectionHeader>
          <SectionText>
            <li>이용약관</li>
            <li>개인정보 처리방침</li>
            <li>취소 및 환불 규정</li>
            <li>FAQ</li>
          </SectionText>
        </FooterSection>
        <FooterSection>
          <SectionHeader>고객지원</SectionHeader>
          <SectionText>
            <li>문의하기</li>
            <li>공지사항</li>
          </SectionText>
        </FooterSection>
      </FooterSections>

      <FooterText>
        (주)메이저링크 | 대표자명: 링키 | 개인정보책임관리자: 링키 | 주소:
        서울시 어쩌구 저쩌로123, 4층 | 사업자등록번호: 123-45-67890 | 통신판매업
        신고번호: 2024-서울어쩌-12345 고객센터: 1234-5678 | 이메일:
        support@majorlink.co.kr
      </FooterText>
      <FooterText>
        (주)메이저링크는 통신판매중개자로서 거래 당사자가 아니므로, 튜터가
        등록한 상품정보 및 거래 등에 관한 의무와 책임을 지지 않습니다.
      </FooterText>
      <FooterText>CopyrightⒸ 2024 majorLink. All rights reserved.</FooterText>

      <FooterIcons>
        <FooterIcon src={insta} alt="Instagram" />
        <FooterIcon src={blog} alt="Blog" />
      </FooterIcons>
    </FooterContainer>
  );
}

export default Footer;

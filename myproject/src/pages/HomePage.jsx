import React, { useEffect } from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import viewAll from './Login/Login';
import background from '../assets/class/HomePage_sliding.png';
import background2 from '../assets/class/HomePage_sliding2.png';
import examplepng from '../assets/class/HomePage_example.jpg';
import category1 from '../assets/class/category1.png';
import category2 from '../assets/class/category2.png';
import category3 from '../assets/class/category3.png';
import category4 from '../assets/class/category4.png';
import category5 from '../assets/class/category5.png';
import category6 from '../assets/class/category6.png';
import category7 from '../assets/class/category7.png';
import category8 from '../assets/class/category8.png';
import searchIcon from '../assets/class/searchIcon.png';
import ad1 from '../assets/class/ad1.png';
import ad2 from '../assets/class/ad2.png';
import { HeaderComponent } from '../components/common/header/HeaderComponent';
import Footer from '../components/common/footer';

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
`;
const SearchSection = styled.section`
  background-color: white;
  padding: 30px 0;
  text-align: center;
`;
const SearchHeader = styled.h1`
  font-size: 40px;
  line-height: 34px;
  letter-spacing: -0.5px;
  font-family: Rubik;
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 5px;
  padding-left: 20px;
`;

const SearchText = styled.h3`
  font-size: 24px;
  font-family: Rubik;
  font-weight: 400;
  margin-top: px;
  line-height: 50px;
  margin-bottom: 30px;
  padding-left: 20px;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  width: 50%;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 50px 10px 10px;
  border-radius: 50px;
  border: 2px solid #49bbbd;
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 0 15px;
  background-color: #49bbbd;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
  }
`;

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const CategoryButton = styled.button`
  background-color: #49bbbd;
  color: white;
  border: 2px solid #e5e5e5;
  border-radius: 10px;
  padding: 13px 14px;
  margin-top: 100px;
  margin: 5px;
  cursor: pointer;
`;

const CategoryImg = styled.img`
  width: 20px;
  height: 20px;
`;

const CategoryText = styled.h3`
  font-size: 0.5em;
  font-style: #49bbbd;
  margin-top: 10px;
`;

const ClassSection = styled.section`
  padding: 80px 0;
  background-color: white;
`;

const ClassHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: #49bbbd;
  font-size: 16px;
  cursor: pointer;
  margin-right: 50px;

  &:hover {
    color: #007b7f;
  }
`;

const ClassTitle = styled.h2`
  font-size: 1.8em;
  margin-bottom: 20px;
  padding-left: 50px;
`;

const ClassGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 0 50px;
`;

const ClassCard = styled.div`
  background-color: white;
  padding: 3px 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ClassImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  background-color: #49bbbd;
`;

const ClassContent = styled.div`
  padding: 15px;
`;

const ClassTitleText = styled.h3`
  font-size: 2rem;
`;

const ClassInstruction = styled.div`
  font-size: 1rem;
  color: #9d9b9b;
`;

const ClassRating = styled.div`
  font-size: 1rem;
  color: black;
`;

const ClassPeopleListening = styled.div`
  font-size: 1rem;
  color: black;
`;

function HomePage() {
  // 연동
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authToken = urlParams.get('X-Auth-Token');
    console.log(`X-Auth-Token: ${authToken}`);

    if (authToken) {
      localStorage.setItem('authToken', authToken);
      console.log(`authToken 로컬에 저장: ${authToken}`);
    }
  }, []);
  // 연동

  return (
    <div>
      <HeaderComponent />
      <Container>
        <Slider {...sliderSettings}>
          <div>
            <img
              src={background}
              alt="Slide 1"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div>
            <img
              src={background2}
              alt="Slide 2"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </Slider>
        <SearchSection>
          <SearchHeader>클래스 조회</SearchHeader>
          <SearchText>들고 싶은 클래스를 검색해보세요.</SearchText>
          <SearchInputWrapper>
            <SearchInput
              type="text"
              placeholder="들고 싶은 클래스를 검색해보세요."
            />
            <SearchButton>
              <img src={searchIcon} alt="icon" />
            </SearchButton>
          </SearchInputWrapper>
          <CategoryWrapper>
            <CategoryButton>
              <CategoryImg src={category1} alt="img" />
              <CategoryText>인문과학</CategoryText>
            </CategoryButton>
            <CategoryButton>
              <CategoryImg src={category2} alt="img" />
              <CategoryText>사회과학</CategoryText>
            </CategoryButton>
            <CategoryButton>
              <CategoryImg src={category3} alt="img" />
              <CategoryText>공학</CategoryText>
            </CategoryButton>
            <CategoryButton>
              <CategoryImg src={category4} alt="img" />
              <CategoryText>자연과학</CategoryText>
            </CategoryButton>
            <CategoryButton>
              <CategoryImg src={category5} alt="img" />
              <CategoryText>교육학</CategoryText>
            </CategoryButton>
            <CategoryButton>
              <CategoryImg src={category6} alt="img" />
              <CategoryText>의약학</CategoryText>
            </CategoryButton>
            <CategoryButton>
              <CategoryImg src={category7} alt="img" />
              <CategoryText>예체능</CategoryText>
            </CategoryButton>
            <CategoryButton>
              <CategoryImg src={category8} alt="img" />
              <CategoryText>기타</CategoryText>
            </CategoryButton>
          </CategoryWrapper>
        </SearchSection>

        <ClassSection>
          <ClassHeader>
            <ClassTitle>⭐지금 인기 있는 클래스</ClassTitle>
            <ViewAllButton onClick={viewAll}>전체보기 &gt;</ViewAllButton>
          </ClassHeader>
          <ClassGrid>
            <ClassCard>
              <ClassImage src={examplepng} alt="Marketing Image" />
              <ClassContent>
                <ClassTitleText>비즈니스 영어 회화</ClassTitleText>
                <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
                <ClassRating>⭐ 4.2</ClassRating>
                <ClassPeopleListening>👥2/5</ClassPeopleListening>
              </ClassContent>
            </ClassCard>
            <ClassCard>
              <ClassImage src={examplepng} alt="Marketing Image" />
              <ClassContent>
                <ClassTitleText>C 프로그래밍</ClassTitleText>
                <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
                <ClassRating>⭐ 4.2</ClassRating>
                <ClassPeopleListening>👥2/5</ClassPeopleListening>
              </ClassContent>
            </ClassCard>
            <ClassCard>
              <ClassImage src={examplepng} alt="기계요소 설계" />
              <ClassContent>
                <ClassTitleText>기계요소 설계</ClassTitleText>
                <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
                <ClassRating>⭐ 4.2</ClassRating>
                <ClassPeopleListening>👥2/5</ClassPeopleListening>
              </ClassContent>
            </ClassCard>
            <ClassCard>
              <ClassImage src={examplepng} alt="디지털 마케팅" />
              <ClassContent>
                <ClassTitleText>디지털 마케팅</ClassTitleText>
                <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
                <ClassRating>⭐ 4.2</ClassRating>
                <ClassPeopleListening>👥2/5</ClassPeopleListening>
              </ClassContent>
            </ClassCard>
          </ClassGrid>
        </ClassSection>

        <Slider {...sliderSettings}>
          <div>
            <img
              src={ad1}
              alt="Slide 1"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div>
            <img
              src={ad2}
              alt="Slide 2"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </Slider>

        <ClassSection>
          <ClassHeader>
            <ClassTitle>🔎새로 등록된 클래스</ClassTitle>
            <ViewAllButton onClick={viewAll}>전체보기 &gt;</ViewAllButton>
          </ClassHeader>
          <ClassGrid>
            <ClassCard>
              <ClassImage src={examplepng} alt="비즈니스 영어 회화" />
              <ClassContent>
                <ClassTitleText>비즈니스 영어 회화</ClassTitleText>
                <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
                <ClassRating>⭐ 4.2</ClassRating>
                <ClassPeopleListening>👥2/5</ClassPeopleListening>
              </ClassContent>
            </ClassCard>
            <ClassCard>
              <ClassImage src={examplepng} alt="C 프로그래밍" />
              <ClassContent>
                <ClassTitleText>C 프로그래밍</ClassTitleText>
                <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
                <ClassRating>⭐ 4.2</ClassRating>
                <ClassPeopleListening>👥2/5</ClassPeopleListening>
              </ClassContent>
            </ClassCard>
            <ClassCard>
              <ClassImage src={examplepng} alt="기계요소 설계" />
              <ClassContent>
                <ClassTitleText>기계요소 설계</ClassTitleText>
                <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
                <ClassRating>⭐ 4.2</ClassRating>
                <ClassPeopleListening>👥2/5</ClassPeopleListening>
              </ClassContent>
            </ClassCard>
            <ClassCard>
              <ClassImage src={examplepng} alt="디지털 마케팅" />
              <ClassContent>
                <ClassTitleText>디지털 마케팅</ClassTitleText>
                <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
                <ClassRating>⭐ 4.2</ClassRating>
                <ClassPeopleListening>👥2/5</ClassPeopleListening>
              </ClassContent>
            </ClassCard>
          </ClassGrid>
        </ClassSection>

        <ClassSection>
          <ClassHeader>
            <ClassTitle>🔥모집 인원 마감 임박 클래스</ClassTitle>
            <ViewAllButton onClick={viewAll}>전체보기 &gt;</ViewAllButton>
          </ClassHeader>
          <ClassGrid>
            <ClassCard>
              <ClassImage src={examplepng} alt="비즈니스 영어 회화" />
              <ClassContent>
                <ClassTitleText>비즈니스 영어 회화</ClassTitleText>
                <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
                <ClassRating>⭐ 4.2</ClassRating>
                <ClassPeopleListening>👥2/5</ClassPeopleListening>
              </ClassContent>
            </ClassCard>
            <ClassCard>
              <ClassImage src={examplepng} alt="C 프로그래밍" />
              <ClassContent>
                <ClassTitleText>C 프로그래밍</ClassTitleText>
                <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
                <ClassRating>⭐ 4.2</ClassRating>
                <ClassPeopleListening>👥2/5</ClassPeopleListening>
              </ClassContent>
            </ClassCard>
            <ClassCard>
              <ClassImage src={examplepng} alt="기계요소 설계" />
              <ClassContent>
                <ClassTitleText>기계요소 설계</ClassTitleText>
                <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
                <ClassRating>⭐ 4.2</ClassRating>
                <ClassPeopleListening>👥2/5</ClassPeopleListening>
              </ClassContent>
            </ClassCard>
            <ClassCard>
              <ClassImage src={examplepng} alt="디지털 마케팅" />
              <ClassContent>
                <ClassTitleText>디지털 마케팅</ClassTitleText>
                <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
                <ClassRating>⭐ 4.2</ClassRating>
                <ClassPeopleListening>👥2/5</ClassPeopleListening>
              </ClassContent>
            </ClassCard>
          </ClassGrid>
        </ClassSection>
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;

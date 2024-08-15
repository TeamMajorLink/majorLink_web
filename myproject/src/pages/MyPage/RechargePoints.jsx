import styled from "styled-components";
import { useState } from "react";
import { HeaderComponent } from "../../components/common/header/HeaderComponent";
import Sidebar from "./Sidebar";
import font from "../../styles/font";
import color from "../../styles/color";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 100px 200px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const Title = styled.p`
  ${() => font.title};
  margin: 20px 0;
`;

const RegisterContainer = styled.div`
  margin: 30px 0;
  p {
    ${() => font.regular_20};
  }
`;

const Input = styled.input`
  margin-right: 20px;
  border: 0.94px solid ${() => color.grayscale_d9};
  color: ${() => color.info_text_color};
  margin-top: 15px;
  width: 350px;
  height: 40px;
  border-radius: 6px;
  border-width: 1px;
`;

const BtnInput = styled.input`
  width: 80px;
  height: 40px;
  background-color: ${() => color.primary_dark};
  color: white;
  border: none;
  border-radius: 6px;
`;

const MypointContainer = styled.div`
  display: flex;
  width: 900px;
  height: 200px;
  border: 0.94px solid ${() => color.grayscale_9d};
  border-radius: 6px;
  margin: 40px 0;
  .vertical {
    border-left: 1px solid ${() => color.grayscale_9d};
    margin-right: 20px;
    height: 80%;
    margin-top: 20px;
  }
`;

const MypointLeft = styled.div`
  display: flex;
  width: 50%;
  padding: 50px;
  p {
    font: ${() => font.regular_20};
  }
  div {
    width: 50%;
  }
  .point {
    margin-top: 30px;
    font: ${() => font.semibold_20};
    color: ${() => color.primary_dark};
  }
`;

const UsePointButton = styled.button`
  width: 40%;
  height: 40px;
  background-color: white;
  border: 0.94px solid ${() => color.grayscale_9d};
  border-radius: 6px;
  margin-top: 50px;
`;

const MypointRight = styled.div`
  padding: 50px;
  ${() => font.regular_16};
  .point {
    margin-top: 35px;
    font: ${() => font.semibold_20};
    color: ${() => color.primary_dark};
  }
`;

const RechargeContainer = styled.div`
`;

const SelectContainer = styled.div`
  display: flex;
`;

const Label = styled.label`
  border: 2px solid ${() => color.info_border_color};
  display: inline-block;
  width: 100px;
  height: 40px;
  ${() => font.regular_16};
  border-radius: 6px;
  text-align: center;
  line-height: 40px;
  margin-right: 30px;
  border-color: ${props => (props.isSelected ? '#4ABECB' : '#DDDDDD')};
`;

const HiddenRadioInput = styled.input`
  display: none;
`;

const Table = styled.table`
  margin-top: 20px;
  border-collapse: collapse;
  text-align: center;
  width: 900px;
  th{
    border-bottom: 4px solid ${() => color.info_text_color};
    ${() => font.semibold_20};
    padding: 20px;
  }
  td {
    border-bottom: 1px solid;
    ${() => font.regular_16};
    padding: 20px;
  }
    th:first-child, td:first-child {
    border-left: none;
  }
`;

function RechargePoints(){

  const [selected, setSelected] = useState('전체');

  const handleSelect = (option) => {
    setSelected(option);
  }

  const headers = [
    {
      text: '적용일',
      value: 'date'
    },
    {
      text: '상태',
      value: 'state'
    },
    {
      text: '포인트',
      value: 'point'
    },
    {
      text: '적립 내용',
      value: 'content'
    },
  ];

  const items = [
    {
      id: 1,
      date: '2024-07-31',
      state: '사용',
      point: '10000P',
      content: '포인트 사용'
    },
    {
      id: 2,
      date: '2024-07-31',
      state: '소멸',
      point: '10000P',
      content: '포인트 소멸'
    },
    {
      id: 3,
      date: '2024-07-31',
      state: '적립',
      point: '10000P',
      content: '포인트 적립'
    },
  ];

  const headerKey = headers.map((header) => header.value);

  return(
    <div>
      <HeaderComponent />
      <Wrapper>
      <Sidebar />
        <Container>
          {/* 포인트 */}
            <Title>포인트</Title>
              <RegisterContainer>
                <p>친구초대코드 등록</p>
                <Input
                  type="text"
                  placeholder="친구초대코드를 입력해주세요" />
                <BtnInput
                  className="register_btn"
                  type="button"
                  value="등록" />
              </RegisterContainer>
            <MypointContainer>
              <MypointLeft>
                <div>
                  <p>내 포인트</p>
                  {/* 포인트가 있을 때, 없을 때 */}
                  <p className="point">10000P</p>
                </div>
                <UsePointButton type="button">포인트 사용하기</UsePointButton>
              </MypointLeft>
              <div className="vertical"/>
              <MypointRight>
                <p>소멸 예정 포인트</p>
                {/* 소멸 예정 포인트가 있을 때, 없을 때 */}
                <p className="point">0P</p>
              </MypointRight>
            </MypointContainer>
          {/* 내역 */}
          <RechargeContainer>
            <Title>내역</Title>
            <SelectContainer>
              <Label 
                htmlFor="radio_1"
                isSelected={selected === '전체'}
                onClick={() => handleSelect('전체')}>
              전체
              <HiddenRadioInput
                id="radio_1"
                type="radio"
                name="category"
                value="전체"
                checked={selected === '전체'}
                onChange={() => handleSelect('전체')}/>
              </Label>
              <Label 
                htmlFor="radio_2"
                isSelected={selected === '적립'}
                onClick={() => handleSelect('적립')}>
              적립
              <HiddenRadioInput
                id="radio_2"
                type="radio"
                name="category"
                value="적립"
                checked={selected === '적립'}
                onChange={() => handleSelect('적립')}/>
              </Label>
              <Label 
                htmlFor="radio_3"
                isSelected={selected === '사용/소멸'}
                onClick={() => handleSelect('사용/소멸')}>
              사용/소멸
              <HiddenRadioInput
                id="radio_3"
                type="radio"
                name="category"
                value="사용/소멸"
                checked={selected === '사용/소멸'}
                onChange={() => handleSelect('사용/소멸')}/>
              </Label>
            </SelectContainer>
            {/* 클릭시 다른 div 출력 */}
            <div>
              {selected === '전체' && 
                <Table>
                  <thead>
                    <tr>
                      {headers.map((header) => 
                        <th key={header.text}>
                          {header.text}
                        </th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => 
                      <tr key={item.id}>
                        {headerKey.map((key) => <td key={key + item.id}>
                          {item[key]}
                        </td>)}
                      </tr>)}
                  </tbody>
                    </Table>}
              {selected === '적립' && 
                <div>적립 내용</div>}
              {selected === '사용/소멸' && 
                <div>사용/소멸 내용</div>}
            </div>
          </RechargeContainer>
        </Container>
      </Wrapper>
    </div>
  );
}

export default RechargePoints;
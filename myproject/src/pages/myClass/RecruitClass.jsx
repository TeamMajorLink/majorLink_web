import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { HeaderComponent } from "../../components/common/header/HeaderComponent";
import font from "../../styles/font";
import color from "../../styles/color";
import ThumbImg from "../../assets/common/thumbnail_myclass_172x95.png";
import Sidebar from "./Sidebar";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 100px 100px;
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

const RadioGroup = styled.div`
  border: 1px solid ${() => color.grayscale_80};
  border-radius: 15px;
  ${() => font.medium_20};
  height: 70px;
  line-height: 70px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`;

const Label = styled.label`
  display: inline-block;
  color: ${props => (props.isSelected ? color.primary_dark : color.black)};
  font-weight: ${props => (props.isSelected ? font.bold_20 : font.medium_20)};
`;

const RadioInput = styled.input`
  display: none;
`;

const Vertical = styled.div`
  border-left: 1px solid;
  margin-right: 20px;
  height: 80%;
  margin-top: 7px;
`;

const ListContainer = styled.div`
  margin-top: 30px;
`;

const Table = styled.table`
  margin-top: 20px;
  border-collapse: collapse;
  text-align: center;
  width: 100%;
  th{
    border-top: 7px solid ${() => color.primary_normal};
    border-bottom: 1px solid ${() => color.grayscale_80};
    ${() => font.semibold_20};
    padding: 20px;
  }
  td {
    border-bottom: 1px solid;
    ${() => font.regular_18};
    padding: 20px;
  }
  th:first-child, td:first-child {
    border-left: none;
  }
  img {
    width: 100px;
    padding: none;
  }
  button {
    border-radius: 20px;
    border: 2px solid ${() => color.primary_normal};
    ${() => font.regular_18};
    background-color: transparent;
    padding: 10px;
    width: 60%
  }
`;

function RecruitClass() {

  const [selected, setSelected] = useState('진행중인');

  const handleSelect = (option) => {
    setSelected(option);
  }

  const headers = [
    {
      text: '번호',
      value: 'num'
    },
    {
      text: '썸네일',
      value: 'img'
    },
    {
      text: '클래스 명',
      value: 'class'
    },
    {
      text: '모집된 인원',
      value: 'count'
    },
    {
      text: '수업 상태',
      value: 'state'
    },
  ];

  const items = [
    {
      id: '1',
      num: '1',
      img: 'img',
      class: '백엔드 웹 개발 기초',
      count: '1',
      state: '수업 시작하기'
    },
  ];

  const headerKey = headers.map((header) => header.value);

  return(
    <div>
      <HeaderComponent />
      <Wrapper>
      <Sidebar />
        <Container>
          <Title>모집 중인 클래스</Title>
          <RadioGroup>
            <Label
              htmlFor="radio_1"
              isSelected={selected === '진행중인'}
              onClick={() => handleSelect('진행중인')}>
              진행중인
              <RadioInput
                id="radio_1"
                type="radio"
                name="category"
                value="진행중인" 
                checked={selected === '진행중인'}
                onClick={() => handleSelect('진행중인')}/>
              </Label>
              <Vertical />
            <Label
              htmlFor="radio_2"
              isSelected={selected === '취소한'}
              onClick={() => handleSelect('취소한')}>
              취소한
              <RadioInput
                id="radio_2"
                type="radio"
                name="category"
                value="취소한" 
                checked={selected === '취소한'}
                onClick={() => handleSelect('취소한')}/>
              </Label>
          </RadioGroup>
          <ListContainer>
            {selected === '진행중인' &&
              <Table>
                <colgroup>
                  <col width="10%" />
                  <col width="20%" />
                  <col width="30%" />
                  <col width="15%" />
                  <col width="25%" />
                </colgroup>
                <thead>
                  <tr>
                    {headers.map((header) => 
                    <th key={header.text}>
                      {header.text}
                    </th>)}
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      {headerKey.map((key) => {
                        let content;

                        if (key === 'state') {
                          content = <button type="button">{item[key]}</button>;
                        } else if (key === 'img') {
                          content = <img src={ThumbImg} alt="썸네일" />;
                        } else if (key === 'class') {
                          content = (
                            <Link to={`/class/${item.id}`}>
                              {item[key]}
                            </Link>
                          )
                        } else {
                          content = item[key];
                        }
                        return <td key={key + item.id}>{content}</td>;
                      })}
                    </tr>
                  ))}
                </tbody>
              </Table>}
            {selected === '취소한' &&
              <div>취소한~</div>
            }
          </ListContainer>
        </Container>
      </Wrapper>
    </div>
  );
}

export default RecruitClass;
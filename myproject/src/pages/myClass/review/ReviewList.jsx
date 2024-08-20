import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { HeaderComponent } from "../../../components/common/header/HeaderComponent";
import Sidebar from "../Sidebar";
import font from "../../../styles/font";
import color from "../../../styles/color";

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

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  ${() => font.title};
  margin: 20px 0;
`;

const WriteButton = styled.button`
  border: none;
  border-radius: 15px;
  font: ${() => font.regular_14};
  color: ${() => color.white};
  background-color: ${() => color.primary_dark};
  width: 100px;
  height: 40px;
  margin-left: 700px;
`;

const ListContainer = styled.div`
  width: 100%;
`;

const Table = styled.table`
  margin-top: 20px;
  border-collapse: collapse;
  text-align: center;
  width: 100%;
  th{
    border-top: 4px solid ${() => color.primary_normal};
    border-bottom: 1px solid;
    ${() => font.medium_20};
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

function ReviewList() {

  const [reviews, setReviews] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://dev.majorlink.store/reviews/${lectureId}`);
        setReviews(response.data);
      } catch (error) {
        console.error('error: ', error);
      }
    };
    fetchReviews();
  }, []);

  const headers = [
    { text: "번호", value: "num" },
    { text: "썸네일", value: "img" },
    { text: "클래스 명", value: "title" },
    { text: "별점", value: "rate" },
  ];

  return(
    <div>
      <HeaderComponent />
      <Wrapper>
      <Sidebar />
        <Container>
          <HeaderContainer>
            <Title>작성한 후기</Title>
            <WriteButton 
              type="button"
              onClick={() => navigate('/myclass/review-form')}>후기 작성하기</WriteButton>
          </HeaderContainer>
            <ListContainer>
              <Table>
                <thead>
                  <tr>
                    {headers.map((header) => (
                      <th key={header.text}>{header.text}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {reviews.map(( review ) => (
                    <tr key={review.id}>
                      <td>{review.id + 1}</td>
                      <td>{review.img}</td>
                      <td>
                        <Link 
                          to={`/myclass/review-list/${review.id}`}
                          state={{ review }}>
                            {review.title}
                        </Link>
                      </td>
                      <td>⭐{review.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </ListContainer>
        </Container>
      </Wrapper>
    </div>
  );
}

export default ReviewList;
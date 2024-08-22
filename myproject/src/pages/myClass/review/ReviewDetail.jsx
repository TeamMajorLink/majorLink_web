import { useLocation } from "react-router-dom";
// import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState  } from "react";
import axios from "axios";
import font from "../../../styles/font";
import color from "../../../styles/color";
import { HeaderComponent } from "../../../components/common/header/HeaderComponent";
import Sidebar from "../Sidebar";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 100px 200px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Title = styled.p`
  ${() => font.title};
  margin: 20px 0;
`;

const DetailContainer = styled.div`
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

function ReviewDetail() {
  
  const [reviews, setReviews] = useState([]);

  const location = useLocation();
  const lecture = location.state;
  const { reviewId } = lecture;

  console.log(reviewId);


  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://dev.majorlink.store/reviews/${reviewId}/details`);
        setReviews([response.data]);
        console.log([response.data]);
      } catch (error) {
        console.error('error: ', error);
      }
    };
    fetchReviews();
    if (location.state && location.state.newReview) {
      setReviews((prevReviews) => [location.state.newReview, ...prevReviews]);
    }
  }, [location.state]);

  const headers = [
    { text: '작성자', value: 'ownerNickname' },
    { text: '내용', value: 'content' },
    { text: '작성일자', value: 'createdAt' },
    { text: '평가', value: 'rate' },
  ];

  return(
    <div>
      <HeaderComponent />
      <Wrapper>
      <Sidebar />
        <Container>
          <Title>{lecture.lecture}</Title>
          <DetailContainer>
            <Table>
              <thead>
                <tr>
                  {headers.map((header) => (
                    <th key={header.text}>{header.text}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {
                  reviews.map((review) => (
                    <tr key={review.reviewId}>
                      <td>{review.ownerNickname}</td>
                      <td>{review.content}</td>
                      <td>{review.createdAt}</td>
                      <td>⭐ {review.rate}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </DetailContainer>
        </Container>
      </Wrapper>
    </div>
  );
}

export default ReviewDetail;
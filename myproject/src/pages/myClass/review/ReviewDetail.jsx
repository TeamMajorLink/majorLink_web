import styled from "styled-components";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
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
  width: 70%;
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

  const location = useLocation();
  const { review } = location.state;

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://dev.majorlink.store/reviews/${reviewId}/details`);
        setReviews(response.data);
      } catch (error) {
        console.error('error: ', error);
      }
    };
    fetchReviews();
  }, []);

  const headers = [
    { text: '작성자', value: 'ownerNickname' },
    { text: '내용', value: 'content' },
    { text: '작성일자', value: 'rate' },
    { text: '평가', value: 'createdAt' },
  ];

  return(
    <div>
      <HeaderComponent />
      <Wrapper>
      <Sidebar />
        <Container>
          <Title>{review.title}</Title>
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
                {reviews.map((detail) => (
                  <tr key={detail.id}>
                    <td>{detail.ownerNickname}</td>
                    <td>{detail.content}</td>
                    <td>{detail.rate}</td>
                    <td>{detail.createdAt}</td>
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
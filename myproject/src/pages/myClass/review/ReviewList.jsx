import styled from "styled-components";
import { useEffect, useState } from "react";
// import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { HeaderComponent } from "../../../components/common/header/HeaderComponent";
import Sidebar from "../Sidebar";
import font from "../../../styles/font";
import color from "../../../styles/color";
import Pagination from "./Pagination";

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

  const location = useLocation();

  const navigate = useNavigate();

  const lectureId = 1;
  // const lectureId = 2;
  // const lectureId = 8;

      // Pagination 
  const [totalPage, setTotalPage] = useState(0); // 전체 리뷰 수
  const [page, setPage] = useState(1);  // 현재 페이지 번호
  const limit = 10;                     // 페이지 당 데이터 수
  const offset = (page - 1) * limit;      // 첫 게시물의 위치
  const numPages = Math.ceil(totalPage / limit) // 총 페이지 수

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://dev.majorlink.store/reviews/list`, { 
          params: { page } 
        });
        const newReviews = location.state && location.state.newReview 
        ? [location.state.newReview, ...response.data.reviewList] 
        : response.data.reviewList;
        
        setReviews(prevReviews => page === 1 
          ? newReviews 
          : [...prevReviews, ...newReviews]);
        setTotalPage(response.data.totalElements);
        console.log(response.data.reviewList);
      } catch (error) {
        if (error.response) {
          console.log('서버에서 반환된 오류:', error.response.data);
          console.log('상태 코드:', error.response.status);
      } else if (error.request) {
          console.log('요청이 이루어졌으나 응답을 받지 못했습니다.', error.request);
      } else {
          console.log('오류 발생:', error.message);
      }
      }
    };
    fetchReviews();
  }, [page, location.state]);

  const headers = [
    { text: "번호", value: "reviewId" },
    { text: "클래스 명", value: "lecture" },
    { text: "평점", value: "rate" },
    { text: '작성자', value: 'ownerNickname' },
    { text: '작성일자', value: 'createdAt' },
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
              onClick={() => navigate(`/reviews/${lectureId}`)}>후기 작성하기</WriteButton>
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
                  {reviews.slice(offset, offset + limit).map(( review ) => (
                    <tr key={review.id}>
                      <td>{review.reviewId}</td>
                      <td>
                        <Link 
                          // to={`/reviews/${location.state.reviewId}/details`}
                          to={`/reviews/${ review.reviewId }/details`}
                          state={ review }>
                            {review.lecture}
                        </Link>
                      </td>
                      <td>⭐ {review.rate}</td>
                      <td>{review.ownerNickname}</td>
                      <td>{review.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </ListContainer>
            <Pagination
              numPages={numPages}
              page={page}
              setPage={setPage} />
        </Container>
      </Wrapper>
    </div>
  );
}

export default ReviewList;
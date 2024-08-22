import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
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

const Pagination = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  button {
    font: ${() => font.regular_24};
    // border: 2px solid ${() => color.primary_normal};
    border: none;
    border-radius: 50%;
    background-color: transparent;
    width: 30px;
    margin: auto 5px;
  }
`;

function ReviewList() {

  const [reviews, setReviews] = useState([]);

  const location = useLocation();

  const navigate = useNavigate();

  const lectureId = 1;
  const { reviewId } = useParams();

      // Pagination 
  const [totalPage, setTotalPage] = useState(0); // 전체 리뷰 수를 위한 상태 추가
  const [page, setPage] = useState(1);  // 현재 페이지 번호
  const limit = 10;                     // 페이지 당 데이터 수
  const offset = (page - 1) * limit;      // 첫 게시물의 위치
  const numPages = Math.ceil(totalPage / limit) // 총 페이지 수

  useEffect(() => {
    if (location.state && location.state.newReview) {
      setReviews(prevReviews => [location.state.newReview, ...prevReviews]);
    }

    const fetchReviews = async () => {
      try {
        // const response = await axios.get(`https://dev.majorlink.store/reviews/${lectureId}`, {
        //   params: { page : 1 }
        // });
        const response = await axios.get(`https://dev.majorlink.store/reviews/list`, { 
          params: { page } 
        });
        setReviews(response.data.reviewList);
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
  }, [page, lectureId]);

  const headers = [
    { text: "번호", value: "reviewId" },
    // { text: "썸네일", value: "img" },
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
                          // to={`/myclass/review-list/${review.id}`}
                          // to={`/reviews/${review.id}/details`}
                          to={`/reviews/${ reviewId }/details`}
                          state={{ review }}>
                            {review.lecture}
                        </Link>
                      </td>
                      <td>⭐ {review.rate}</td>
                      {/* <td>{review.img}</td> */}
                      <td>{review.ownerNickname}</td>
                      <td>{review.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </ListContainer>
            <Pagination>
              <button type="button" 
                onClick={() => setPage(page - 1)} 
                disabled={page === 1}>&lt;</button>
                {Array(numPages)
                .fill()
                .map((_, i) => {
                  const pageNumber = i + 1;
                  const isCurrentPage = pageNumber === page;
                  return (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() => setPage(pageNumber)}
                      aria-current={isCurrentPage ? "page" : undefined}
                      style={{ backgroundColor: isCurrentPage ? '#D9D9D9' : "white" }} // 현재 페이지인 경우에만 보이게 함
                      >
                        {pageNumber}
                      </button>
                  );
                })}
                <button type="button" 
                  onClick={() => setPage(page + 1)} 
                  disabled={page === numPages}>
                &gt;
                </button>
            </Pagination>
        </Container>
      </Wrapper>
    </div>
  );
}

export default ReviewList;
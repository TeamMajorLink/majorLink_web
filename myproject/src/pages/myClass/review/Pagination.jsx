import styled from "styled-components";
import font from "../../../styles/font";
import color from "../../../styles/color";

const PageComponent = styled.div`
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

function Pagination({ numPages, page, setPage }) {

  return(
    <PageComponent>
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
    </PageComponent>
  );
}

export default Pagination;
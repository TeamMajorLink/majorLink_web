import styled from "styled-components";
import CouponImg from "../../assets/pages/page_coupon_img.png";
import font from "../../styles/font";
import color from "../../styles/color";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 200px 500px;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      ${() => font.title};
      margin-bottom: 20px;
    }
  }

  .c_div{
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    input {
      width: 450px;
      height: 50px;
      margin-top: 5px;
      border: 0.94px solid ${() => color.info_border_color};
      color: ${() => color.info_text_color};
      border-radius: 6px;
      border-width: 1px;
    }
    button {
      width: 80px;
      height: 35px;
      position: absolute;
      top: 13px;
      right: 20px;
      background-color: ${() => color.save_color};
      color: white;
      border: none;
      border-radius: 6px;
      font-weight: bold;
    }
  }
    
  .list_div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 150px;
      height: 140px;
      margin: 50px 0;
    }
    h1 {
      ${() => font.semibold_20};
      margin-bottom: 10px;
      color: ${() => color.info_text_color};
    }
    p {
      ${() => font.regular_16};
    }
  }
`;

function Coupons() {
  return(
    <Wrapper>
      <div className="container">
        <p className="title">쿠폰함</p>
        <div className="c_div">
          <input type="text" id="register" placeholder="쿠폰 코드를 입력하세요" />
          <button type="button">등록</button>
        </div>
        <div className="list_div">
          <img src={CouponImg} alt="쿠폰 이미지"/>
          <h1>사용 가능한 쿠폰이 없습니다.</h1>
          <p>친구초대 혹은 클래스를 개설하여 쿠폰을 받아보세요!</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Coupons;
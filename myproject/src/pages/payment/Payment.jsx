import React, { useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

export default function Payment() {
  const BACK_SERVER = 'https://dev.majorlink.store';
  const token = localStorage.getItem('authToken');
  // const token =
  //   'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjY4ODYxOTQsInN1YiI6ImFjY2Vzcy10b2tlbiIsInV1aWQiOiIzMTU5ZjMxYy1kZjI4LTRkNzktYjA1Mi0zN2IyNGY2ZmUzZjkiLCJpYXQiOjE3MjQyOTQxOTR9.SCB1sksvzLVM_LePSQ40J2yay3y0PDncOxvO43acsz4';

  const [isLoading, setIsLoading] = useState(false);

  const loadIamportScript = () =>
    new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.iamport.kr/js/iamport.payment-1.2.0.js';
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });

  const handlePayment = async () => {
    try {
      console.log(isLoading);
      setIsLoading(true);

      await loadIamportScript();

      window.IMP.init('imp81348451');

      const response = await axios.post(
        `${BACK_SERVER}/payment/order`,
        { product: 'POINT_1000', amount: 1000 },
        {
          headers: {
            'X-Auth-Token': `${token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(response);
      //   const orderId = response.data.response;
      //   console.log('Order ID:', orderId);

      //   const paymentResponse = await axios.get(
      //     `${BACK_SERVER}/payment/${orderId}`,
      //     {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //         'Content-Type': 'application/json',
      //       },
      //     },
      //   );

      //   const history = paymentResponse.data.response;

      const history = response.data;

      window.IMP.request_pay(
        {
          pg: 'html5_inicis',
          pay_method: 'card',
          merchant_uid: history.merchantUid,
          name: history.product,
          amount: history.amount,
          buyer_email: history.email,
          buyer_name: history.name,
        },
        async (rsp) => {
          if (rsp.success) {
            try {
              const paymentResponse1 = await axios.post(
                `${BACK_SERVER}/payment/verify`,
                {
                  impUid: rsp.imp_uid,
                  merchantUid: rsp.merchant_uid,
                  amount: 1000,
                },
                {
                  headers: {
                    'X-Auth-Token': `${token}`,
                    'Content-Type': 'application/json',
                  },
                },
              );
              console.log('결제 완료!!', paymentResponse1.data);
              window.location.href = '/payment/done';
            } catch (error) {
              console.error('결제 실패!!', error);
              alert('결제 처리 중 오류가 발생하였습니다.');
            } finally {
              setIsLoading(false);
            }
          } else {
            console.log(rsp);
            // alert('결제 실패');
            setIsLoading(false);
            window.location.href = '/payment/done';
          }
        },
      );
    } catch (error) {
      console.error('에러남:', error.response?.data?.message || error.message);
      setIsLoading(false);
    }
  };

  return (
    <PaymentLay>
      <PayModal>
        <PriceLay>
          <Title>majorlink 포인트 결제를 도와드릴게요</Title>
          <PriceInfo>
            <MiniTitle>majorlink</MiniTitle>
            <br />
            <br />- 1000원
            <br />
            <br />- 1000포인트
          </PriceInfo>
          <br />
          <Button onClick={handlePayment}>결제하기</Button>
        </PriceLay>
      </PayModal>
    </PaymentLay>
  );
}

const slideInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PaymentLay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: black;
  @media screen and (min-width: 640px) {
    padding-top: 100px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const PayModal = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid white;
  border-radius: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PriceLay = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  color: grey;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  transition: background-color 0.3s ease;
  animation: ${slideInFromBottom} 2s ease-out;

  &:hover {
    background-color: blue;
    color: white;
  }

  &:active {
    background-color: #3e8e41;
  }
`;

const PriceInfo = styled.div`
  background-color: black;
  color: #333;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  margin: 16px 0;
  margin-top: 100px;
  animation: ${slideInFromBottom} 2s ease-out;

  &:hover {
    background-color: #e9ecef;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 800;
  color: white;
  text-align: center;
  margin: 20px 0;
  margin-top: -100px;
  padding: 10px;
  padding-top: 50px;
  border-bottom: 2px solid grey;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${slideInFromBottom} 2s ease-out;

  &:hover {
    color: grey;
    border-bottom-color: #388e3c;
  }
`;

const MiniTitle = styled.div`
  color: grey;
  font-size: 40px;
  padding-bottom: 10px;
`;

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 9999;
// `;

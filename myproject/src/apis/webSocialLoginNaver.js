export const webSocialLoginNaver = () => {
  const clientId = 'aIu1qi2IPHa8Tjg7z0AO'; // 네이버에서 제공하는 Client ID
  // const redirectUri = 'http://localhost:3000/naver'; // Spring 서버의 소셜 로그인 엔드포인트
  const redirectUri = 'https://dev.majorlink.store/oauth/authorize/naver'; // Spring 서버의 소셜 로그인 엔드포인트

  const state = Math.random().toString(36).substring(2); // CSRF 방지를 위한 상태 값

  // 네이버 로그인 페이지로 리다이렉트
  window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;
};

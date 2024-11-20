import auth from './auth.js';

const REACT = import.meta.env.VITE_REACT_DOMAIN_PORT;
const SERVER = import.meta.env.VITE_SERVER_DOMAIN_PORT;

export const loginKakao = async () => {
  const redirectUri = `${REACT}/redirect`;
  const url = `${SERVER}/oauth2/authorization/kakao?redirect_uri=${encodeURIComponent(
    redirectUri
  )}&mode=login`;
  try {
    const response = await auth.get(url);
    window.open(url, '_self');
    return response.data;
  } catch (error) {
    console.error('Kakao login error: ', error);
  }
};

export const loginNaver = async () => {
  const redirectUri = `${REACT}/redirect`;
  const url = `${SERVER}/oauth2/authorization/naver?redirect_uri=${encodeURIComponent(
    redirectUri
  )}&mode=login`;
  try {
    const response = await auth.get(url); // API 호출
    window.open(url, '_self');
    return response.data;
  } catch (error) {
    console.error('Naver login error: ', error);
  }
};

export const loginGoogle = async () => {
  const redirectUri = `${REACT}/redirect`;
  const url = `${SERVER}/oauth2/authorization/google?redirect_uri=${encodeURIComponent(
    redirectUri
  )}&mode=login`;
  try {
    const response = await auth.get(url);
    window.open(url, '_self');
    return response.data;
  } catch (error) {
    console.error('Google login error: ', error);
  }
};

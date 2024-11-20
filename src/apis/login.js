import auth from './auth.js';

const REACT = import.meta.env.VITE_REACT_DOMAIN_PORT;
const SERVER = import.meta.env.VITE_SERVER_DOMAIN_PORT;

export const loginKakao = () => {
  const redirectUri = `${REACT}/redirect`;
  const url = `${SERVER}/oauth2/authorization/kakao?redirect_uri=${encodeURIComponent(
    redirectUri
  )}&mode=login`;
  window.location.href = url;
};

export const loginNaver = () => {
  const redirectUri = `${REACT}/redirect`;
  const url = `${SERVER}/oauth2/authorization/naver?redirect_uri=${encodeURIComponent(
    redirectUri
  )}&mode=login`;
  window.location.href = url;
};

export const loginGoogle = () => {
  const redirectUri = `${REACT}/redirect`;
  const url = `${SERVER}/oauth2/authorization/google?redirect_uri=${encodeURIComponent(
    redirectUri
  )}&mode=login`;
  window.location.href = url;
};

import auth from './auth';

export const test = async () => {
  const DOMAIN= import.meta.env.VITE_REACT_DOMAIN;
  const PORT= import.meta.env.VITE_REACT_PORT;

  try {
    const response = await auth.get(
      // 추후 프론트 도메인으로 변경 필요
      `/oauth2/authorization/kakao?redirect_uri=${DOMAIN}:${PORT}&mode=login`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

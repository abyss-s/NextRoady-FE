import React from 'react';
import { loginKakao, loginNaver, loginGoogle } from '../../apis/login';
import { SiKakao, SiNaver, SiGoogle } from 'react-icons/si';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">소셜 로그인</h1>
      <div className="space-y-4 w-80">
        <button
          onClick={loginKakao}
          className="flex items-center justify-center min-w-full py-3 bg-kakao hover:bg-yellow-500 transition duration-200 rounded-lg font-semibold text-black"
        >
          <SiKakao className="mr-2 text-2xl" />
          카카오 로그인
        </button>

        <button
          onClick={loginNaver}
          className="flex items-center justify-center min-w-full py-3 bg-naver hover:bg-green-600 transition duration-200 rounded-lg font-semibold text-white"
        >
          <SiNaver className="mr-2 text-2xl" />
          네이버 로그인
        </button>

        <button
          onClick={loginGoogle}
          className="flex items-center justify-center min-w-full py-3 bg-google hover:bg-red-600 transition duration-200 rounded-lg font-semibold text-white"
        >
          <SiGoogle className="mr-2 text-2xl" />
          구글 로그인
        </button>
      </div>
    </div>
  );
};

export default Login;

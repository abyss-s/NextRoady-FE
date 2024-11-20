// src/pages/Login/Login.jsx
import React from 'react';
import { loginKakao, loginNaver, loginGoogle } from '../../apis/login';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">소셜로그인</h1>
      <div className="space-y-4">
        <button
          onClick={loginKakao}
          className="w-full py-3 bg-kakao hover:bg-yellow-500 transition duration-200 rounded-lg font-semibold text-black"
        >
          카카오 로그인
        </button>
        <button
          onClick={loginNaver}
          className="w-full py-3 bg-naver hover:bg-green-600 transition duration-200 rounded-lg font-semibold text-white"
        >
          네이버 로그인
        </button>
        <button
          onClick={loginGoogle}
          className="w-full py-3 bg-google hover:bg-red-600 transition duration-200 rounded-lg font-semibold text-white"
        >
          구글 로그인
        </button>
      </div>
    </div>
  );
};

export default Login;

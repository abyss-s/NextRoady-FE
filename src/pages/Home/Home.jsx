import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <img src={logo} alt="logo" className="w-80 h-auto mb-8" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        안녕하세요. 넥로디입니다🤗
      </h1>
      <p className="text-center text-xl text-gray-700 mb-6">
        넥로디는 개발자 커리어 로드맵 추천 웹사이트입니다.
      </p>
      <p className="text-center text-lg text-gray-600 mb-8">
        맞춤형 로드맵으로 더 빠르게 개발자로 성장해보세요.
        <br />
        지금 바로 아래 버튼을 눌러 시작하세요!
      </p>
      <button
        onClick={handleLoginClick}
        className="px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary-hover hover:shadow-lg transition duration-300 text-xl"
      >
        로그인
      </button>
      <p className="mt-6 text-gray-500 text-sm text-center">
        소셜로그인으로 간단하게 시작할 수 있어요.
      </p>
    </div>
  );
};

export default Home;

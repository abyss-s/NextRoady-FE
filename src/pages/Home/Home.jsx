import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 가져오기

  const handleLoginClick = () => {
    navigate('/login'); // 버튼 클릭 시 /login으로 이동
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">NextRoady</h1>
      <button
        onClick={handleLoginClick}
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover hover:shadow-lg transition duration-300"
      >
        로그인
      </button>
    </div>
  );
};

export default Home;

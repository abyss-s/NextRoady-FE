import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between bg-gray-700 text-white p-4 fixed top-0 w-full z-10">
      <button onClick={() => navigate(-1)} className="flex items-center">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        뒤로 가기
      </button>
      <img src={logo} alt="logo" className={`w-40 h-auto`} />

      <button onClick={() => navigate('/')} className="flex items-center">
        홈
        <FontAwesomeIcon icon={faHome} className="ml-2" />
      </button>
    </header>
  );
};

export default Header;

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // const accessToken = params.get('access_token');
    // const refreshToken = params.get('refresh_token');

    navigate('/chat');
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Redirect;

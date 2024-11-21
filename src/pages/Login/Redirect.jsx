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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500 border-b-4"></div>
        <h1 className="mt-4 text-lg font-semibold text-gray-700">Loading...</h1>
      </div>
    </div>
  );
};

export default Redirect;

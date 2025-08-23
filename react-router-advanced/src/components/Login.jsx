import { useNavigate } from 'react-router-dom';
import { login } from '../utils/auth';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/profile');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

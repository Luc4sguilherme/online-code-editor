import { useState } from 'react';

import Error from '../../components/Error';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

import './style.css';

function Login() {
  const [register, setRegister] = useState(true);

  return (
    <Error>
      <div className="login-container">
        <div className="login-wrapper">
          {register ? <SignUp /> : <SignIn />}

          <button
            type="button"
            className="register-btn"
            onClick={() => setRegister(prev => !prev)}
          >
            {register ? 'Login' : 'Register'}
          </button>
        </div>
      </div>
    </Error>
  );
}

export default Login;

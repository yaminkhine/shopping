import { useState } from 'react';
import { auth } from '../../../pages/firebase/firebase.js';
import {signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed', error.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

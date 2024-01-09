// register.js
import { useState } from 'react';
import { auth } from '../../../pages/firebase/firebase.js';
import {createUserWithEmailAndPassword} from "firebase/auth";


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registration successful');
      setEmail('');
      setPassword('');
      setPhone('');
      
    } catch (error) {
      console.error('Registration failed', error.message);
    }
  };

  return (
    <div>
      <h1>Create New User</h1>
      <form onSubmit={handleRegister}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <label>Phone Number:</label>
        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

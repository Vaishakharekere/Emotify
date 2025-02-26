import React, { useState } from 'react'; // Import useState from React
import { useNavigate } from 'react-router-dom';
import '../styles/auth.css';  // Import CSS

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState(''); // State for storing name during signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Assume login is successful for demonstration
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('email', email); // Store email in local storage
    navigate('/'); // Redirect to home page
  };

  const handleSignup = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Assume signup is successful for demonstration
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('name', name); // Store name in local storage
    localStorage.setItem('email', email); // Store email in local storage
    navigate('/'); // Redirect to home page
  };

  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>LOGIN</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>SIGNUP</button>
        </div>
        {isLogin ? (
          <div className='form'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <input 
                type='email' 
                placeholder='Email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <input 
                type='password' 
                placeholder='Password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <a href='#'>Forgot password?</a>
              <button type='submit'>Login</button>
            </form>
          </div>
        ) : (
          <div className='form'>
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
              <input 
                type='text' 
                placeholder='Name' 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
              <input 
                type='email' 
                placeholder='Email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <input 
                type='password' 
                placeholder='Password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <input 
                type='password' 
                placeholder='Retype your password' 
              />
              <button type='submit'>Sign up</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;

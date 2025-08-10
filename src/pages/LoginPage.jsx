import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.style.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ backgroundColor: '#0c0c0c', color: 'white', fontFamily: '"Montserrat", sans-serif' }}>
      {/* Logo */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">L</h1>
      </div>
      
      {/* Login Form */}
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome</h2>
        <p className="text-center mb-8">Log in to LawyerX to continue to LawyerX.</p>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="email" 
              id="email" 
              className="input-field" 
              placeholder=" " 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <label htmlFor="email">Email address*</label>
          </div>
          
          <div className="form-group">
            <input 
              type="password" 
              id="password" 
              className="input-field" 
              placeholder=" " 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <label htmlFor="password">Password*</label>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember-me" 
                className="mr-2" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me" className="text-sm text-gray-400 cursor-pointer">Remember me</label>
            </div>
            <Link to="/forgot-password" className="text-sm text-gray-400 hover:text-white transition-colors">
              Forgot password?
            </Link>
          </div>
          
          <button type="submit" className="continue-btn mt-6">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();

  function navigateLoginButton(){
  navigate('/login');
  }

  return (
    <div className="navbar-outer-div">
        <div className='navbar-inner-div'>
        <h2>HADES GATES</h2>
        <button onClick={navigateLoginButton} className='navbar-login-button'>
          LOGIN
        </button>
        </div>
    </div>
  )
}

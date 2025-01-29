import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


export default function 
() {
    const navigate = useNavigate();

    const handleLoginSubmit = () =>{
   
   navigate('/gates');
    }

  return (
    <div className="login-outer-div">
 <div className='login-container-div'>
        <div className="hades-img-div">
{/* <img /> */}
        </div>

        <div className="login-inner-div">

            <h2 className='login-title'>UNDERWORLD</h2>

            <div className="all-fields-container">
            <div className="login-input">
                <p className='login-p'>EMAIL ID:</p>
                <input className='login-input-field' 
                type='email'
                placeholder='ENTER YOUR EMAIL'/>
            </div>
            <div className="login-input">
                <p className='login-p'>PASSWORD:</p>
                <input className='login-input-field' 
                type='password'
                placeholder='ENTER YOUR PASSWORD'/>
            </div>

            <p className='forgot-password-link'>FORGOT PASSWORD?</p>
            <button onClick={handleLoginSubmit} className='login-submit-button'>ENTER UNDERWORLD</button>
            </div>
           
          

        </div>
    </div>
    </div>
   
  )
}

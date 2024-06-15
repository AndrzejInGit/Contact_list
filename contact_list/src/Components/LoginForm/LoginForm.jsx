import React from 'react';
import './LoginForm.css';
import { CiUser, CiLock } from "react-icons/ci";

const LoginForm = () => {
  return (
    <div class="content">
    <div class="wrapper">
      <form action="">
        <h1>Logowanie</h1>
        <div className='input-box'>
          <input type="text" placeholder='Nazwa użytkownika' required />
          <CiUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Hasło' required />
          <CiLock className='icon'/>
        </div>
          <div className="remember-forgor">
           <label><input type="checkbox" />Pamiętaj mnie</label>
           <a href="#">Zapomniałeś hasła?</a> 
          </div>

          <button type='submit'>Zaloguj</button>

          <div className="register-link">
            <p>Nie masz konta? <a href="#">Zarajestruj się</a></p>
          </div>
      </form>
    </div>
    </div>
  )
}

export default LoginForm
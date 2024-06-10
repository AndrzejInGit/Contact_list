import React from 'react';
import './RegisterForm.css';
import { CiUser, CiLock } from "react-icons/ci";

const RegisterForm = () => {
  return (
    <div class="wrapper">
      <form action="">
        <h1>Rejestracja</h1>
        <div className='input-box'>
          <input type="text" placeholder='Nazwa użytkownika' required />
          <CiUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type="mail" placeholder='E-mail' required />
          <CiUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Hasło' required />
          <CiLock className='icon'/>
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Potwierdź hasło' required />
          <CiLock className='icon'/>
        </div>
          <div className="remember-forgor">
           <label><input type="checkbox" required />Zapoznałem się z <a href="#">regulaminem</a></label>
          </div>

          <button type='submit'>Zarejestruj</button>

          <div className="register-link">
            <p>Masz już konto? <a href="#">Zaloguj się</a></p>
          </div>
      </form>
    </div>
  )
}

export default RegisterForm
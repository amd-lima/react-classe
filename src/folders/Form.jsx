import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import { useNavigate } from 'react-router-dom';

export default function Form({props}) {

  const navigate = useNavigate();

  const {
    email, password, setEmail, setPassword
  } = useContext(MyContext);

  const handleEmail = ({target: {value}}) => setEmail(value);
  const handlePassword = ({target: {value}}) => setPassword(value);

  return (
    <form>
        <label htmlFor="input-email">
          <input onChange={handleEmail} value={email} type='email'/>
        </label>
        <label htmlFor="input-password">
          <input onChange={handlePassword} value={password} type='password'/>
        </label>
        <button onClick={() => navigate('/page1') } type="button">Enviar</button>
      </form>
  )
}

import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

export default function Page1() {
  const {email, password} = useContext(MyContext);
  return (
    <div>
      <h1>Informações do Formulario</h1>
      <h2>O email é: {email}</h2>
      <h2>A senha é: {password}</h2>  
    </div>
  )
}

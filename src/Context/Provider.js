import React, { useState } from 'react';
import MyContext from './MyContext';

// import { Container } from './styles';

function Provider({children}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const provider = {
    email, password, setEmail, setPassword
  }

  return(
    <MyContext.Provider value={ provider } >
      {children}
    </MyContext.Provider>
  );
}

export default Provider;
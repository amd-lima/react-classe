import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function NextButtom() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = () =>{
        const actualLocation = location.pathname;
        const actualPath = actualLocation.replace('/','');
        const route = Number(actualPath) + 1 === 3? '/' : `/${Number(actualPath) + 1}`;
        navigate(route);
    }

  return (
    <button onClick={handleClick} type='button'>Next Page</button>
  )
}

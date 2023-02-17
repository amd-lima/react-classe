import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BackButtom() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = () =>{
        const actualLocation = location.pathname;
        const actualPath = actualLocation.replace('/','');
        const page = Number(actualPath) - 1 === 0 ? '/' : `/${Number(actualPath) - 1}`;

    const route = actualLocation === '/' ? '/3' : page
    navigate(route);
    }

  return (
    <button onClick={handleClick} type='button'>Back Page</button>
  )
}

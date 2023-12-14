import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes({ isLoggedIn, children }) {
  const navigate = useNavigate();

  function clickHandler(){
    navigate('/')
  }
  if (!isLoggedIn) {
    return <button onClick={clickHandler} className="btn btn-primary">You need to log in !</button>
     
   
  
  } else {
    return <> {children} </>;
  }
}

export default ProtectedRoutes
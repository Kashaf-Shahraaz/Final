import Backendless from 'backendless';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Nav({isLoggedIn, isOpen, setIsopen}) {
  
   
  function menuHandler() {
    if (isOpen === true) {
      setIsopen(false);
    } else {
      setIsopen(true);
    }
  }

 const navigate = useNavigate();

function clickHandler(){
  navigate('/')
}
  function logoutUser(){
    function userLoggedOut()
    {
      console.log( "user has been logged out" );
      navigate('/')
  
    }
    
    function gotError( err ) // see more on error handling
    {
      console.log( "error message - " + err.message );
      console.log( "error code - " + err.statusCode );
    }
    
    
      Backendless.UserService.logout()
       .then( userLoggedOut )
       .catch( gotError ) ;
  
}
  return ( 

<div className="navbar bg-base-100 shadow-md shadow-slate-300">

  <div onClick={menuHandler} className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button> 
  </div>
  <div className="flex-1">
    <a onClick={clickHandler} className="btn btn-ghost text-sm ">Weather-App</a>
  </div>
  <div className="flex-none">
 { isLoggedIn ? <button onClick={logoutUser} className="btn btn-active btn-primary">Logout</button> : <></> }
  </div>

  <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
        <div className="sd-body">
          <ul>
            <Link to={"/"}><li className="sd-link">Home</li></Link>
            <Link to={"/weatherDetails"}><li className="sd-link">Weather Forecast</li></Link>
            <Link to={"/userDetails"}><li className="sd-link">User Details</li></Link>
            <Link to={"/clothingSuggestions"}><li className="sd-link">Clothing suggestions</li></Link>

          
          </ul>
        </div>
      </div>

      <div
        className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
        onClick={menuHandler}
      ></div>
</div>


  )
}

export default Nav
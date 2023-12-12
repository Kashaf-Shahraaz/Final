import Backendless from 'backendless';
import React from 'react'
import { useNavigate } from 'react-router-dom';


function Nav({isLoggedIn, setIsLoggedIn}) {
  //  recieve the is loged sstate
  // create logout tn 
 const navigate = useNavigate();

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

  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button> 
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost text-sm ">Weather-App</a>
  </div>
  <div className="flex-none">
 { isLoggedIn ? 
 <button onClick={logoutUser} className="btn btn-active btn-primary">Primary</button> : <></>
 }
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
    {/* ? check is loged state if true show  */}

  </div>
</div>


  )
}

export default Nav
import Backendless from 'backendless'
import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



function LoginUser({email, setEmail, password, setPassword, setIsLoggedIn}) {

  const navigate =  useNavigate();

function loginHandler(e){
   e.preventDefault();

   function userLoggedIn( user )
{ 
  console.log( "user has logged in" );
  setIsLoggedIn(true)
 navigate('/userDetails')
}

function gotError( err ) // see more on error handling
{
  console.log( "error message - " + err.message );
  console.log( "error code - " + err.statusCode );

}

Backendless.UserService.login( email, password, true )
 .then( userLoggedIn )
 .catch( gotError );
}
  return (
    <div className="hero max-h-screen bg-transparent">
  <div className="hero-content flex-col mt-20 lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
      <form onSubmit={(e) => loginHandler(e)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
  {/* <ToastContainer /> */}
</div>
  )
}

export default LoginUser
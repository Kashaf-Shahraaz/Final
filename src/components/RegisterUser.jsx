import Backendless from 'backendless';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function RegisterUser({email, setEmail, password, setPassword}) {

const navigate = useNavigate();

function registerHandler(e){
e.preventDefault();
     
function userRegistered( user )
{
//   console.log( "user has been registered" );
 navigate('/loginUser')
}

function gotError( err ) // see more on error handling
{
  console.log( "error message - " + err.message );
  console.log( err.code );

}

let user = new Backendless.User();
user.email = email;
user.password = password;
// console.log(user);
Backendless.UserService.register( user ).then( userRegistered ).catch( gotError );

    }
  return (
    <div className="hero max-h-screen md:h-full md:flex md:justify-center md:items-center">
  <div className="hero-content flex-col mt-20 lg:flex-col md:h-2/3 md:w-96">
  <div className="text-center lg:text-left ">
      <h1 style={{color:'#fff'}} className="text-5xl font-bold">Register</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl md:h-fit ">
      <form onSubmit={(e) => registerHandler(e)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span style={{color:'#fff'}} className="label-text">Email</span>
          </label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span style={{color:'#fff'}} className="label-text">Password</span>
          </label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" required />
          {/* <label className="label">
            <a style={{color:'#fff'}} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">
          <button style={{color:'#fff'}} className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default RegisterUser
import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserDetails() {
    const navigate = useNavigate();

    function submitHandler(e){
        e.preventDefault();
    }


  function clickHandler(){
   navigate('/clothingSuggestions')
  }
  return (
    <div className="hero min-h-full">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-bold">Enter your Details</h1>
      <p className="py-6">Helps us suggest you suitable clothing</p>
    </div>
    <div className="card shrink-0 w-full h-fit max-w-sm shadow-2xl glass">
         <form onSubmit={submitHandler} className="form-control w-full max-w-xs"> 
           <select className="select select-bordered" required name=''>
             <option disabled selected>Select your Gender</option>
             <option>Female</option>
             <option>Male</option>
           </select>
         </form>
        <div className="form-control mt-6">
          <button onClick={clickHandler} className="btn btn-primary">Login</button>
        </div>
        </div>
     
  </div>
</div>
  )
}

export default UserDetails
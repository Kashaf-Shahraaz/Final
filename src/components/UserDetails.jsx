import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserDetails() {
    const navigate = useNavigate();
    const [gender, setGender] = useState()

    // function clickHandler(){ 

    //   navigate('/clothingSuggestions')
    //  }

    function changeHandler(e){    

        // console.log(e.target.value);

        e.target.value === ("Female" || "Male")? navigate('/clothingSuggestions')  : alert("select gender")
    }


  function clickHandler(){
  }
  return (
    <div className="hero min-h-full ">
  <div className="hero-content flex-col lg:flex-row-reverse gap-0">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-bold">Enter your Details</h1>
      <p className="py-6">Helps us suggest you suitable clothing</p>
    </div>
    <div className="card shrink-0 w-full h-44 max-w-sm shadow-2xl glass flex justify-center items-center">
         <form className="form-control w-fit max-w-xs"> 
           <select required onChange={changeHandler} className="select select-bordered">
             <option disabled selected>Select your Gender</option>
             <option>Female</option>
             <option>Male</option>
           </select>
         </form>
        <div className="form-control mt-6">
          <button onClick={clickHandler} className="btn btn-primary">Get Suggestion</button>
        </div>
        </div>
     
  </div>
</div>
  )
}

export default UserDetails
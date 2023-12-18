import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserDetails({gender, setGender}) {
    const navigate = useNavigate();
    // const [gender, setGender] = useState()

    // function clickHandler(){ 

    //   navigate('/clothingSuggestions')
    //  }

    function changeHandler(e){    
     setGender((i) => e.target.value)
     gender === ("Female") || ("Male") ? navigate('/clothingSuggestions') : alert("select gender")
    }


  function clickHandler(){
  }
  return (
    <div className="hero min-h-full md:h-full md:flex md:justify-center md:items-center">
  <div className="hero-content flex-col lg:flex-col gap-0">
    <div style={{color:'#fff'}} className="text-center lg:text-left">
      <h1 className="text-4xl font-bold">Enter your Details</h1>
      <p className="py-6">Helps us suggest you suitable clothing</p>
    </div>
    <div className="card shrink-0 w-full h-44 max-w-sm shadow-2xl glass flex justify-center items-center">
         {/* <form className="form-control w-fit max-w-xs">  */}
           <select required onChange={changeHandler} className="select select-bordered">
             <option disabled selected>Select your Gender</option>
             <option>Female</option>
             <option>Male</option>
           </select>
         {/* </form> */}
        <div className="form-control mt-6">
          <button style={{color:'#fff'}} onClick={clickHandler} className="btn btn-primary">Get Suggestion</button>
        </div>
        </div>
     
  </div>
</div>
  )
}

export default UserDetails
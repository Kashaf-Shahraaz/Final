import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function DetailedWeather({city, setCity, data, setdata}) {

    function submitHandler(e){
        e.preventDefault();
  
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then((res) => setdata(res.data))
        .catch((error) => console.log(error))
      }
  
      function changeHandler(e){
       setCity((i) => e.target.value)
      }
      
  return (
    <div className='homePage min-h-full w-full flex justify-center items-center flex-col  bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>

      {/* <div><img src="https://cdn3d.iconscout.com/3d/premium/thumb/weather-report-02-6743897-5528736.png" alt="cloud icon" width={200}/></div> */}

    <div className="card shrink-0 w-full max-w-sm bg-base-200 absolute top-24 text-center">
      <form onSubmit={submitHandler} className="card-body ">
        <p style={{fontWeight:'700'}}>Enter City Name to know the Weather </p>
        <div className="form-control ">
          <input onChange={changeHandler} type="text" placeholder="Enter City name" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6 items-center">
        <Link to={'/weatherDetails'} ><button className="btn btn-primary w-40">Search</button></Link>
        </div>
      </form>
   </div>
  

   <div>{city && <div>
    <> 
      <h1>Temperature: {data && Math.round(data.main.temp )+ "°C"}</h1>
      <p>Feels like: {data && Math.round(data.main.feels_like)+ "°C"}</p>

      <h2>Description: {data && data.weather[0].description}</h2>

      {/* <h2>{data && data.weather[0].icon}</h2> */}

    </>
   
      </div>}</div>
    
    </div>
    
  )
}

export default DetailedWeather 
import React, { useState } from 'react'
import axios from 'axios'


function DetailedWeather() {

    const [city, setCity] = useState('')
    const [data, setdata] = useState('')  
    // const [temp, setTemp] = useState('')


    function submitHandler(e){
        e.preventDefault();
  
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then((res) => setdata(res.data))
        .catch((error) => console.log(error))
   }        

  return (
    <div className='homePage min-h-full w-full flex justify-between items-center flex-col  bg-no-repeat bg-cover'>
         {/* <div className='homePage min-h-full w-full flex justify-center items-center flex-col  bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] '></div> */}
    <div className="card shrink-0 w-full max-w-sm bg-transparent absolute top-16 text-center ">
      <form onSubmit={submitHandler} className="card-body flex flex-row">
        {/* <p style={{fontWeight:'700'}}>Enter City Name to know the Weather </p> */}
        <div className="form-control ">
          <input  onChange={(e)=> setCity(e.target.value)} type="text" placeholder="Enter City name" className="input input-bordered " required />
        </div>
        <div className="form-control items-center">
        <button className="btn btn-primary w-full">Search</button>
        </div>
      </form>
   </div>
   
   <div className='details absolute top-36 flex flex-col justify-center items-center'>

   {data && <> 
      <div className='detailsIcon'>    
      <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}alt="weathericon" width={200}/>
      </div>
      <h1>{data && Math.round(data.main.temp )+ "°C"}</h1>
      <h2>{data && data.weather[0].description}</h2>
      <p>Feels like : {data && Math.round(data.main.feels_like)+ "°C"}</p>
    <p>Max : {data && Math.round(data.main.temp_max)+"°C"} Min : {data && Math.round(data.main.temp_min)+ "°C"}</p>
   </>}

   <div className='detailsPerDay'>
    <p>Visibility : {data && (data.visibility)+ "m"}</p>
   </div>

   <div className='detailshumidity'>
     Humidity & pressure
      <p>Pressure : {data && Math.round(data.main.pressure)+ "hPa"}</p>
      <p>Humidity : {data && (data.main.humidity)+ "%"}</p>
   </div>
    
   <div className='detailsSun'>
    <div className='sun'>
        {/* <h2>{data && (data.sys.sunrise)}</h2> */}
    </div>
    <div> uv index </div>
   </div>

   </div>

   
    </div>
    
  )
}

export default DetailedWeather 
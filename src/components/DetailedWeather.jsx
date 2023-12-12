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
    <div className='homePage min-h-full w-full flex justify-between items-center flex-col  bg-no-repeat bg-cover gap-y-2'>
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
   
   {/* {data && <> 
      <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}alt="weathericon" width={200}/>
      <h1>{data && Math.round(data.main.temp )+ "°C"}</h1>
      <h2>{data && data.weather[0].description}</h2>
      <p>Feels like : {data && Math.round(data.main.feels_like)+ "°C"}</p>
    <p>Max : {data && Math.round(data.main.temp_max)+"°C"} Min : {data && Math.round(data.main.temp_min)+ "°C"}</p>
   </>} */}
 
{data && 
 <div className="card w-screen h-fit glass mt-24"> 
 <figure className="px-10 pt-10">
    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weathericon" width={100} className="rounded-xl" />
 </figure>
  <div className="card-body items-center text-center ">
    <h1 className="card-title text-6xl font-bold">{data && Math.round(data.main.temp )+ "°C"}</h1>
    <p>{data.weather[0].description}</p>
    <p className='card-description text-lg font-normal'>Feels like: {data && Math.round(data.main.feels_like)+ "°C"}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Max : {data && Math.round(data.main.temp_max)+"°C"}</button>
      <button className="btn btn-primary">Min : {data && Math.round(data.main.temp_min)+ "°C"}</button>
    </div>

    
      {/* <p>Pressure: {data && (data.main.pressure)+ "hPa"}</p>
      <p>Humidity: {data && (data.main.humidity)+ "%"}</p> */}
  </div>
</div>
}
 {data && <div className="card-body w-screen h-52 flex flex-row justify-around text-center rounded-xl gap-y-5 p-0">

<div className="card w-2/4 h-36 glass items-center shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Pressure</h2>
    <p>{data && (data.main.pressure)+ "hPa"}</p>
  </div>
</div>

<div className="card w-2/4 h-36 glass items-center shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Humidity</h2>
    <p>{data && (data.main.humidity)+ "%"}</p>
  </div>
</div>
</div>}

{/* {data && <div className="card-body w-screen glass h-2">

<div className="card w-screen h-2 glass items-center shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Visibility</h2>
    <p>{data && (data.visibility)+ "m"}</p>
  </div>
</div>

  </div>} */}

    </div>

    
  )
}

export default DetailedWeather 
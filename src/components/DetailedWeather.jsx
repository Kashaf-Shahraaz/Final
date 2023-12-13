import React, { useState } from 'react'
import axios from 'axios'


function DetailedWeather() {

    const [city, setCity] = useState('')
    const [data, setdata] = useState('')  
    
    const [currentDate, setCurrentDate] = useState(getDate());
    function getDate() {
      const today = new Date();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      const date = today.getDate();
      return `${date}/${month}/${year}`;
    }
    // const sunrise = new Date((data.sys.sunrise + data.timezone) * 1000)

    function submitHandler(e){
        e.preventDefault();
  
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then((res) => setdata(res.data))
        .catch((error) => console.log(error))
   }        

  return (
    <div className='homePage min-h-screen w-screen flex justify-between items-center flex-col  bg-no-repeat bg-cover gap-y-2 p-2 pb-8  bg-[url(https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>
    <div className="card shrink-0 w-fit max-w-sm bg-transparent absolute top-16 text-center mt-2 ">
      <form onSubmit={submitHandler} className="card-body flex flex-row h-fit justify-center items-center p-0 ">
        <div className="form-control w-full ">
          <input  onChange={(e)=> setCity(e.target.value)} type="text" placeholder="Enter City name" className="input input-bordered text-center " required />
        </div>
        <div className="form-control items-center">
        <button className="btn btn-primary w-full">Search</button>
        </div>
      </form>
   </div>

{data && 
 <div className="card w-full h-fit glass mt-14"> 
  {data && <div className="card-body w-full h-2 justify-center items-center text-center rounded-xl">
      <h2>Today's Date: </h2>
      <p>{currentDate}</p>
  </div>}

 <figure className="px-10 pt-10">
    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weathericon" width={100} className="rounded-xl" />
 </figure>
  <div className="card-body items-center text-center ">
    <h1 className="card-title text-7xl font-bold">{data && Math.round(data.main.temp )+ "°C"}</h1>
    <p>{data.weather[0].description}</p>
    <p className='card-description text-lg font-normal'>Feels like: {data && Math.round(data.main.feels_like)+ "°C"}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Max : {data && Math.round(data.main.temp_max)+"°C"}</button>
      <button className="btn btn-primary">Min : {data && Math.round(data.main.temp_min)+ "°C"}</button>
      
    </div>
  </div>
</div>
}
 {data && <div className="card-body w-full h-fit flex flex-row justify-around text-center rounded-xl gap-y-5 p-0">

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

{data && <div className="card-body w-full glass h-2 justify-center items-center text-center rounded-xl">
    <h2 className="card-title">Visibility</h2>
    <p>{data && (data.visibility)+ "m"}</p>
  </div>}


 {data && <div className="card-body w-full h-fit flex flex-row justify-around text-center rounded-xl gap-y-5 p-0">
 <div className="card w-2/4 h-36 glass items-center shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Sunrise</h2>
    <p>{data && (data.sys.sunrise)}</p>
  </div>
</div>

<div className="card w-2/4 h-36 glass items-center shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Sunset</h2>
    <p>{data && (data.sys.sunset)}</p>
  </div>
</div>
 </div>}

    </div>

    
  )
}

export default DetailedWeather 
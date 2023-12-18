import axios from 'axios';
import React from 'react'

function ClothingSuggestions({city, setCity, data, setdata, gender, sunrise, setSunrise, sunset, setSunset, time, setTime}) {

//function that executes on submit
  function submitHandler(e) {
    e.preventDefault();
 
    //accessing data from the API
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {setdata(res.data)
        const sunrise = new Date((res.data.sys.sunrise + res.data.timezone) * 1000).toLocaleTimeString()
        // console.log(sunrise);
        setSunrise(sunrise)
        
        const sunset = new Date((res.data.sys.sunset + res.data.timezone) * 1000).toLocaleTimeString()
        // console.log(sunset);
        setSunset(sunset)

        const time = new Date((res.data.dt + res.data.timezone) * 1000).toUTCString()
        // console.log(time);
        setTime(time)
      })
      .catch((error) => console.log(error));
  }
 
   
  // Changing background with changing weather conditions
  let bg = "";  
   
  if(data && data.weather[0].main === "Clear"){
     bg = "clearSky";
  } else if (data && data.weather[0].main === "Clouds"){
     bg = "clouds";
  } else if (data && data.weather[0].main === "Thunderstorm"){
     bg = "thunderstorm";
  } else if (data && data.weather[0].main === "Drizzle"){
   bg = "drizzle";
  } else if (data && data.weather[0].main === "Rain"){
   bg = "rain";
  } else if (data && data.weather[0].main === "Snow"){
    bg = "snow";
  } else if (data && data.weather[0].main === "Mist"){
    bg = "mist";
  } else if (data && data.weather[0].main === "Haze"){
    bg = "haze";
  } else if (data && data.weather[0].main === "Dust"){
    bg = "dust";
  } else if (data && data.weather[0].main === "Fog"){
    bg = "fog";
  }else {
    bg = "";
  }

  //  Changing clothing suggestions based on gender type
  let pic = "";
   if (gender === "Female" && (data && data.weather[0].main === "Rain")){
    pic = "https://ik.imagekit.io/xecjx9x1o/1.png?updatedAt=1702516519045";
   } else if (gender === "Male" && (data && data.weather[0].main === "Rain")){
    pic = "https://ik.imagekit.io/xecjx9x1o/2.png?updatedAt=1702516697366";
  } else if (gender === "Female" && (data && data.weather[0].main === "Drizzle")){
    pic = "https://ik.imagekit.io/xecjx9x1o/7.png?updatedAt=1702516697283";
  }  else if (gender === "Male" && (data && data.weather[0].main === "Drizzle")){
    pic = "https://ik.imagekit.io/xecjx9x1o/8.png?updatedAt=1702516697152";
  }  else if (gender === "Female" && (data && ((data.weather[0].main === "Snow") && (data.main.temp <= 10)))){
    pic = "https://ik.imagekit.io/xecjx9x1o/9.png?updatedAt=1702516697358";
  }  else if (gender === "Male" && (data && ((data.weather[0].main === "Snow") && (data.main.temp <= 10)))){
    pic = "https://ik.imagekit.io/xecjx9x1o/10.png?updatedAt=1702516697276";
  }  else if (gender === "Female" && (data && ((data.weather[0].main === "Snow") && (data.main.temp <= 5)))){
    pic = "https://ik.imagekit.io/xecjx9x1o/11.png?updatedAt=1702516697427";
  }  else if (gender === "Male" && (data &&( (data.weather[0].main === "Snow") && (data.main.temp <= 5)))){
    pic = "https://ik.imagekit.io/xecjx9x1o/12.png?updatedAt=1702516698631";
  }  else if (gender === "Female" && (data && ((data.weather[0].main === "Snow" || "heavy snow") && (data.main.temp <= 0)))){
    pic = "https://ik.imagekit.io/xecjx9x1o/13.png?updatedAt=1702516698922";
  }  else if (gender === "Male" && (data && ((data.weather[0].main === "Snow" || "heavy snow") && (data.main.temp <= 0)))){
    pic = "https://ik.imagekit.io/xecjx9x1o/14.png?updatedAt=1702516698916";
  }  else if(gender === "Female" && (data && data.main.temp > 15)){
    pic = "https://ik.imagekit.io/xecjx9x1o/5.png?updatedAt=1702516697305";
  }  else if(gender === "Male" && (data && data.main.temp > 15)){
    pic = "https://ik.imagekit.io/xecjx9x1o/6.png?updatedAt=1702516697225";
  } else if(gender === "Female" && (data && ((data.main.temp < 10)))){
    pic = "https://ik.imagekit.io/xecjx9x1o/9.png?updatedAt=1702516697358";
  } else if(gender === "Male" && (data && ((data.main.temp < 10)))){
    pic = "https://ik.imagekit.io/xecjx9x1o/10.png?updatedAt=1702516697276";
  } else if(gender === "Female" && (data && data.main.temp <= 0)){
    pic = "https://ik.imagekit.io/xecjx9x1o/13.png?updatedAt=1702516698922";
  } else if(gender === "Male" && (data && data.main.temp <= 0)){
    pic = "https://ik.imagekit.io/xecjx9x1o/14.png?updatedAt=1702516698916";
  } else if(gender === "Female" && (data && data.main.temp >= 10)){
    pic = "https://ik.imagekit.io/xecjx9x1o/5.png?updatedAt=1702516697305";
  }  else if(gender === "Male" && (data && data.main.temp >= 10)){
    pic = "https://ik.imagekit.io/xecjx9x1o/6.png?updatedAt=1702516697225";
  }
 

  return (
    //main content
    <div className={`homePage overflow-auto h-full w-full flex justify-between items-center flex-col bg-no-repeat bg-cover gap-y-2 p-5 pb-8 md:text-2xl lg:flex-row lg:justify-center lg:items-center lg:w-full lg:h-full lg:text-lg ${bg}`}>
     
     {/* city input section */}
      <div className="card shrink-0 w-full h-fit bg-transparent text-center mt-2 md:w-9/12 text-2xl lg:w-1/3 lg:absolute lg:top-16 lg:inset-x-1/3">
        <form
          onSubmit={submitHandler}
          className="card-body flex flex-row h-fit justify-center items-center p-0 "
        >
          <div className="form-control w-full md:w-8/12 h-full">
            <input 
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Enter City name"
              className="input input-bordered text-center "
              required
            />
          </div>
          <div className="form-control items-center">
            <button className="btn btn-primary w-full">Search</button>
          </div>
        </form>
      </div>
      
      {data && (

        // temperature card
        <div className="card w-full h-fit glass mt-14 md:w-full md:h-fit lg:w-80 lg:h-2/3 lg:absolute lg:left-36 lg:gap-y-0 lg:gap-x-0 ">
          {data && (
            <div className="card-body w-full h-2 justify-center items-center text-center rounded-xl md:text-2xl font-medium lg:text-sm lg:w-full">
              <p>{time && time}</p>
            </div>
          )}


          <figure className="px-10 pt-10 md:p-0">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="weathericon"
              width={100}
              className="rounded-xl md:w-72 lg:w-28"
            />
          </figure>
          <div className="card-body items-center text-center md:text-2xl lg:text-sm">
            <h1 className="card-title text-7xl font-bold md:text-8xl lg:text-5xl">
              {data && Math.round(data.main.temp) + "°C"}
            </h1>
            <p>{data.weather[0].description}</p>
            <p className="card-description text-lg font-normal md:text-xl lg:text-sm">
              Feels like: {data && Math.round(data.main.feels_like) + "°C"}
            </p>
            <div className="card-actions">
              <button className="btn btn-primary md:text-xl lg:text-sm">
                Max : {data && Math.round(data.main.temp_max) + "°C"}
              </button>
              <button className="btn btn-primary md:text-xl lg:text-sm">
                Min : {data && Math.round(data.main.temp_min) + "°C"}
              </button>
            </div>
          </div>
        </div>
      )}
      {data && (

        // pressure and humidity card
        <div className="card-body w-fit h-fit flex flex-row justify-around text-center rounded-xl gap-y-5 p-0 md:w-full lg:w-fit lg:justify-center lg:items-center lg:absolute lg:top-40 lg:inset-x-1/3">
          <div className="card w-2/4 h-36 glass items-center shadow-xl lg:w-56">
            <div className="card-body">
              <div className='card-heading flex justify-center items-center'> 
              <img src='https://cdn3d.iconscout.com/3d/premium/thumb/air-flow-7847140-6293695.png?f=webp' alt='pressure icon' width={50}/>
              <h2 className="card-title md:text-2xl font-bold">Pressure</h2>
              </div>
              <p className="card-p md:font-medium">{data && data.main.pressure + "hPa"}</p>
            </div>
          </div>

          <div className="card w-2/4 h-36 glass items-center shadow-xl lg:w-56">
            <div className="card-body">
              <div className='card-heading flex justify-center items-center'>
              <img src='https://static.vecteezy.com/system/resources/previews/011/652/634/original/humidity-3d-render-icon-illustration-png.png' alt='humidity icon' width={50}/>
              <h2 className="card-title md:text-2xl font-bold">Humidity</h2>
              </div>
              <p className="card-p md:font-medium">{data && data.main.humidity + "%"}</p>
            </div>
          </div>
        </div>
      )}

      {data && (

        // visibility card
        <div className="card-body w-full glass h-fit justify-center items-center text-center rounded-xl md:w-full lg:w-3/12 lg:h-32 lg:absolute lg:top-80 lg:inset-x-1/3">
          <div className='card-heading flex justify-center items-center'>
            <img src='https://cdn3d.iconscout.com/3d/premium/thumb/visibility-7847143-6293698.png?f=webp' alt='visibility icon' width={50} />
          <h2 className="card-title md:text-2xl font-bold">Visibility</h2>
          </div>
          <p className="card-p md:font-medium">{data && data.visibility + "m"}</p>
        </div>
      )}

      {data && (

        // sunrise and sunset card
        <div className="card-body w-full h-fit flex flex-row justify-around text-center rounded-xl gap-y-5 p-0 md:w-full lg:w-fit lg:absolute lg:bottom-32 lg:inset-x-1/3">
          <div className="card w-2/4 h-36 glass items-center shadow-xl px-1 lg:w-56">
            <div className="card-body">
              <div className='card-heading flex justify-center items-center'>
              <img className="card-img md:w-20 h-16" src='https://cdn3d.iconscout.com/3d/premium/thumb/sunrise-5175063-4328026.png' alt='sunrise icon' width={50}/>
              <h2 className="card-title md:text-2xl font-bold">Sunrise</h2>
              </div>
              <p className="card-p md:font-medium">{sunrise && sunrise}</p>
            </div>
          </div>

          <div className="card w-2/4 h-36 glass items-center shadow-xl px-1 lg:w-56">
            <div className="card-body">
            <div className='card-heading flex justify-center items-center'>
              <img className="card-img md:w-20 h-16" src='https://cdn3d.iconscout.com/3d/premium/thumb/sunset-5175066-4328029.png?f=webp' alt='sunset icon' width={50}/>
              <h2 className="card-title md:text-2xl font-bold">Sunset</h2>
              </div>
              <p className="card-p md:font-medium">{sunset && sunset}</p>
            </div>
          </div>
        </div>
      )}

      {data && (

        // clothing suggestion's card
        <div className="card w-full h-fit glass flex flex-col justify-center items-center pt-5 lg:w-96 lg:h-4/6 lg:absolute lg:right-32 lg:top-36">
          <div className='card-title justify-center'>
          <h2>Clothing Suggestion</h2>
          </div>
          <figure className='figure w-fit h-fit rounded-xl'>
          <img src={`${pic}`} alt="clothes"/>
          </figure>
      </div>
      )}
    </div>
  );
}

export default ClothingSuggestions
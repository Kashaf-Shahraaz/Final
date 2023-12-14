import axios from 'axios';
import React from 'react'

function ClothingSuggestions({city, setCity, data, setdata, gender}) {


  function submitHandler(e) {
    e.preventDefault();

    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => setdata(res.data))
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
  } else {
    bg = "";
  }

  //  Changing clothing suggestions based on gender type
  let pic = "";
   if (gender === "Female" && ( data && ((data.weather[0].main === "Clouds") || (data.weather[0].main === "Rain") && (data.main.temp >= 10)))){
    pic = "https://ik.imagekit.io/xecjx9x1o/7.png?updatedAt=1702516697283";
   } else if (gender === "Male" && (data && ((data.weather[0].main === "Clouds") || (data.weather[0].main === "Rain") && (data.main.temp > 10)))){
    pic = "https://ik.imagekit.io/xecjx9x1o/8.png?updatedAt=1702516697152";
  }  else if (gender === "Female" && (data && ((data.weather[0].main === "Clouds") || (data.weather[0].main === "Rain") && (data.main.temp <= 5)))){
    pic = "https://ik.imagekit.io/xecjx9x1o/1.png?updatedAt=1702516519045";
  }  else if (gender === "Male" && (data && ((data.weather[0].main === "Clouds") || (data.weather[0].main === "Rain") && (data.main.temp <= 5)))){
    pic = "https://ik.imagekit.io/xecjx9x1o/2.png?updatedAt=1702516697366";
  }  else if (gender === "Female" && (data && data.weather[0].main === "Drizzle")){
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
  }  else if (gender === "Female" && (data && ((data.weather[0].main === "Snow") && (data.main.temp <= 0) || (data.weather[0].description === "heavy snow")))){
    pic = "https://ik.imagekit.io/xecjx9x1o/13.png?updatedAt=1702516698922";
  }  else if (gender === "Male" && (data && ((data.weather[0].main === "Snow") && (data.main.temp <= 0) || (data.weather[0].description === "heavy snow")))){
    pic = "https://ik.imagekit.io/xecjx9x1o/14.png?updatedAt=1702516698916";
  }  else if(gender === "Female" && (data && ((data.weather[0].main === "Clear") && (data.main.temp > 10)))){
    pic = "https://ik.imagekit.io/xecjx9x1o/5.png?updatedAt=1702516697305";
  }  else {
    pic = "https://ik.imagekit.io/xecjx9x1o/6.png?updatedAt=1702516697225";
  }
 

  return (
    <div className={`homePage min-h-screen w-screen flex justify-between items-center flex-col  bg-no-repeat bg-cover gap-y-2 p-5 pb-8 ${bg}`}>
      <div className="card shrink-0 w-fit max-w-sm bg-transparent absolute top-16 text-center mt-2">
        <form
          onSubmit={submitHandler}
          className="card-body flex flex-row h-fit justify-center items-center p-0 "
        >
          <div className="form-control w-full ">
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
        <div className="card w-full h-fit glass mt-14">
          {data && (
            <div className="card-body w-full h-2 justify-center items-center text-center rounded-xl">
              <h2>Today's Date: </h2>
              {/* <p>{getDate}</p> */}
              {/* <button onClick={getDate}>get date</button> */}
            </div>
          )}

          <figure className="px-10 pt-10">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="weathericon"
              width={100}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center ">
            <h1 className="card-title text-7xl font-bold">
              {data && Math.round(data.main.temp) + "°C"}
            </h1>
            <p>{data.weather[0].description}</p>
            <p className="card-description text-lg font-normal">
              Feels like: {data && Math.round(data.main.feels_like) + "°C"}
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">
                Max : {data && Math.round(data.main.temp_max) + "°C"}
              </button>
              <button className="btn btn-primary">
                Min : {data && Math.round(data.main.temp_min) + "°C"}
              </button>
            </div>
          </div>
        </div>
      )}
      {data && (
        <div className="card-body w-full h-fit flex flex-row justify-around text-center rounded-xl gap-y-5 p-0">
          <div className="card w-2/4 h-36 glass items-center shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Pressure</h2>
              <p>{data && data.main.pressure + "hPa"}</p>
            </div>
          </div>

          <div className="card w-2/4 h-36 glass items-center shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Humidity</h2>
              <p>{data && data.main.humidity + "%"}</p>
            </div>
          </div>
        </div>
      )}

      {data && (
        <div className="card-body w-full glass h-2 justify-center items-center text-center rounded-xl">
          <h2 className="card-title">Visibility</h2>
          <p>{data && data.visibility + "m"}</p>
        </div>
      )}

      {data && (
        <div className="card-body w-full h-fit flex flex-row justify-around text-center rounded-xl gap-y-5 p-0">
          <div className="card w-2/4 h-36 glass items-center shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Sunrise</h2>
              <p>{data && data.sys.sunrise}</p>
            </div>
          </div>

          <div className="card w-2/4 h-36 glass items-center shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Sunset</h2>
              <p>{data && data.sys.sunset}</p>
            </div>
          </div>
        </div>
      )}

      {data && (
        <div className="card w-full h-fit glass">
        <figure className='figure w-fit h-fit rounded-xl'><img src={`${pic}`} alt="rain clothes"/></figure>
        {/* <figure className='figure w-fit h-fit rounded-xl'><img src="https://ik.imagekit.io/xecjx9x1o/2.png?updatedAt=1702516697366" alt="rain clothes"/></figure> */}

        {/* <div className="card-body">
          <h2 className="card-title">Description:</h2>
          <ol>
            <li>1. umbrella</li>
            <li>2. Rain Jacket</li>
            <li>3. Rain boots</li>
          </ol>
        </div> */}
      </div>
      )}
    </div>
  );
}

export default ClothingSuggestions
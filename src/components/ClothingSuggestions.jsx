import axios from 'axios';
import React, { useState } from 'react'

function ClothingSuggestions() {

  const [city, setCity] = useState("");
  const [data, setdata] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => setdata(res.data))
      .catch((error) => console.log(error));
      // var condition =true
      // if (condition) {
      //   pic = 'https://img.freepik.com/premium-photo/night-sky-full-falling-snowflakes_303714-1440.jpg'
      // }

  }
  return (
    <div className="homePage min-h-screen w-screen flex justify-between items-center flex-col  bg-no-repeat bg-cover gap-y-2 p-2 pb-8 ">
      <div className="card shrink-0 w-fit max-w-sm bg-transparent absolute top-16 text-center mt-2 ">
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
        <figure className='figure w-fit h-fit rounded-xl'><img src="https://ik.imagekit.io/xecjx9x1o/1.png?updatedAt=1702516519045" alt="rain clothes"/></figure>
        {/* <figure className='figure w-fit h-fit rounded-xl'><img src="https://ik.imagekit.io/xecjx9x1o/2.png?updatedAt=1702516697366" alt="rain clothes"/></figure> */}

        {/* <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div> */}
      </div>
      )}
    </div>
  );
}

export default ClothingSuggestions
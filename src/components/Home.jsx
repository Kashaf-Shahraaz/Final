import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
      
  return (
    <div className='card-main h-full flex flex-col justify-center'>
  <div className='homepageTop text-center flex flex-col justify-center items-center gap-1 md:text-xl lg:flex-row'>  
    <img className='card-img w-60 md:w-8/12 md:relative md:top-4 md:left-0 md:right-0 lg:w-1/3 lg:absolute lg:left-0 lg:top-12' src="https://cdn3d.iconscout.com/3d/premium/thumb/weather-report-02-6743897-5528736.png" alt="cloud icon" />
   <div style={{color:'#fff'}} className='heading'>
   <h1 className='homepageH1 text-3xl font-bold leading-4 md:text-4xl md:relative md:top-0'>Weather<span className='subheading font-normal'> ForeCasts</span></h1><br />
   <Link to={'/weatherDetails'}><button style={{color:'#edf2f5'}} className="btn glass w-36 font-semibold text-normal hover:glass md:text-2xl md:w-56 md:h-20 md:rounded-full">Get Started</button></Link>
    </div> 
  </div>

  <div style={{color:'#fff'}} className="card w-full text-neutral-content mt-2 ">
  <div className="card-body items-center text-center md:p-20 md:gap-y-6">
    <h2 className="card-title text-xl font-bold md:text-3xl">Clothing suggestion?</h2>
    <p className='card-description text-lg font-medium md:text-xl'>Register to discover .. Or Login if you're an existing user !</p>
    <div style={{color:'#edf2f5'}} className="card-actions justify-end">
      <Link to={'/registerUser'}>
      <button className="btn btn-ghost bg-sky-700 hover:bg-sky-950 hover:text-sky-200 md:text-xl ">Register</button>
      </Link>
      <Link to={'/loginUser'}>
      <button className="btn btn-ghost bg-sky-700 hover:bg-sky-950 hover:text-sky-200 md:text-xl">Login</button>
      </Link>
    </div>
  </div>
</div>

    </div>
  )
}

export default Home
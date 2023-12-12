import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

    
  return (
    <>
  <div style={{color:'#001244'}} className='homepageTop text-center flex flex-col justify-center gap-1 '>
    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/weather-report-02-6743897-5528736.png" alt="cloud icon" width={400} />
   <div className='heading  '>
   <h1 className='homepageH1 text-3xl font-bold leading-4'>Weather<span className='subheading font-normal'> ForeCasts</span></h1><br />
   <Link to={'/weatherDetails'}><button style={{color:'#edf2f5'}} className="btn glass w-36 font-semibold hover:glass ">Get Started</button></Link>
    </div> 
  </div>

  <div style={{color:'#001244'}} className="card w-full bg-transparent text-neutral-content mt-2">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xl font-bold">Clothing suggestion ?</h2>
    <p className='card-description text-lg font-medium'>Register to discover .. Or Login if you're an existing user !</p>
    <div style={{color:'#edf2f5'}} className="card-actions justify-end">
      <Link to={'/registerUser'}>
      <button className="btn btn-ghost bg-sky-700 hover:bg-sky-950 hover:text-sky-200 ">Register</button>
      </Link>
      <Link to={'/loginUser'}>
      <button className="btn btn-ghost bg-sky-700 hover:bg-sky-950 hover:text-sky-200">Login</button>
      </Link>
    </div>
  </div>
</div>

    </>
  )
}

export default Home
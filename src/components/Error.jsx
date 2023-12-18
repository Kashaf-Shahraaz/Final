import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='container flex flex-col justify-center items-center text-center pt-20 gap-20 md:pt-32 md:gap-24 lg:w-fit lg:h-fit lg:pt-4 lg:gap-14'>
      <h2 style={{color:'#fff'}} className='card-title'>Oops ! Something went wrong ..</h2>
    <div className='unplug'>
      <img style={{color:'#fff'}} className='error-img lg:w-screen lg:h-80' src="https://solarservicegroup.com.au/wp-content/uploads/2019/01/unplugged-vecotr-1500x500.png" alt="oops" height={150} />
    </div>
    <Link to={'/'}><button style={{color:'#fff'}} className="btn glass md:w-40 md:h-14">Get back Home</button></Link>
    </div>
  )
}

export default Error
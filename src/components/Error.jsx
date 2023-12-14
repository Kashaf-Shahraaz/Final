import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='container flex flex-col justify-center items-center text-center'>
      <h2>Oops ! Something went wrong ..</h2>
    <div className='unplug'>
      <img src="https://solarservicegroup.com.au/wp-content/uploads/2019/01/unplugged-vecotr-1500x500.png" alt="oops" height={150} />
    </div>
    <Link to={'/'}><button className='errorBtn' style={{borderColor:'#cf1b1b'}} >Get back Home</button></Link>
    </div>
  )
}

export default Error
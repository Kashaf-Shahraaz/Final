import React from 'react'

function Home() {
  return (
    
    <div className='homePage min-h-full w-full flex justify-center items-center flex-col bg-[url(https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D)] bg-no-repeat bg-cover'>
       
        {/* <h1 className='title text-white'>Weather</h1> */}
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-transparent">
      <form className="card-body ">
        <div className="form-control  ">
          <input type="text" placeholder="Enter City name" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary ">Search</button>
        </div>
      </form>
   </div>

    </div>
  )
}

export default Home
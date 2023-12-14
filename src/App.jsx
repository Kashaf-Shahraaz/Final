import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './layout/Footer';
import Nav from './layout/Nav';
import DetailedWeather from './components/DetailedWeather';
import Backendless from 'backendless';
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';
import { useState } from 'react';
import UserDetails from './components/UserDetails';
import ClothingSuggestions from './components/ClothingSuggestions';
import Error from './components/Error';


function App() {

  Backendless.serverURL = "https://eu-api.backendless.com"
  Backendless.initApp(process.env.REACT_APP_BACKENDLESS_API_KEY , process.env.REACT_APP_BACKENDLESS_APP_KEY );

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState('')

  return (
    <div data-theme="cupcake" className="App">
      {/* Navbar */}
      <Nav isLoggedIn = {isLoggedIn} />

      {/* Main section */}
      <main className="main ">
        
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/weatherDetails' element = {<DetailedWeather />} />
          <Route path='/registerUser' element = {<RegisterUser email={email} setEmail={setEmail} password={password} setPassword={setPassword} />} />
          <Route path='/loginUser' element = {<LoginUser email={email} setEmail={setEmail} password={password} setPassword={setPassword} setIsLoggedIn = {setIsLoggedIn}  />} />
          <Route path='/userDetails' element = {<UserDetails />} />
          {/* <Route path='/clothingSuggestions' element ={
          <ProtectedRoutes isLoggedIn={isLoggedIn} >
            <ClothingSuggestions city={city}  setCity={ setCity} data={data} setdata={setdata} />
          </ProtectedRoutes>}/> */}

          <Route path='/clothingSuggestions' element={<ClothingSuggestions />}/>
          <Route path='/*' element={<Error />}/>
            
        </Routes>
       
      </main>



      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './layout/Footer';
import Nav from './layout/Nav';
import DetailedWeather from './components/DetailedWeather';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('')
  const [data, setdata] = useState('')
  return (
    <div data-theme="cupcake" className="App">
      {/* Navbar */}
      <Nav />

      {/* Main section */}
      <main className="main ">
        
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/weatherDetails' element = {<DetailedWeather city={city} setCity={setCity} data = {data} setdata={setdata}/>} />
        </Routes>

      </main>



      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './layout/Footer';
import Nav from './layout/Nav';
import DetailedWeather from './components/DetailedWeather';

function App() {
 
  return (
    <div data-theme="cupcake" className="App">
      {/* Navbar */}
      <Nav />

      {/* Main section */}
      <main className="main ">
        
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/weatherDetails' element = {<DetailedWeather />} />
        </Routes>

      </main>



      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

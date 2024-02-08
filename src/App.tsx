import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './main/Main';
import Home from './pet_works/pet_weather/components/Home';
import WeatherApi from './pet_works/pet_weather/components/Weather';
import Photo from './pet_works/pet_photo/Photo';
import Freader from './pet_works/pet_reader/FREADER/Freader';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/home' element={<Home />} />
          <Route path='/weather' element={<WeatherApi />} />
          <Route path='/photo' element={<Photo />} />
          <Route path='/reader' element={<Freader />} />
          <Route path='https://dzen.ru/?yredirect=true' element={<Freader />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

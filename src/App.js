import './App.css';
import Destination from './components/destination/Destination';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Moon from './planets/Moon';
import Mars from './planets/Mars';
import Europa from './planets/Europa';
import Titan from './planets/Titan';
import Crew from './components/crew/Crew';
import Technology from './components/technology/Technology';
import Launch from './components/technology/Launch';
import SpacePort from './components/technology/SpacePort';
import SpaceCapsule from './components/technology/SpaceCapsule';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Destination' element={<Destination />}>

            <Route path='Moon' element={<Moon />} />
            <Route path='Mars' element={<Mars />} />
            <Route path='Europa' element={<Europa />} />
            <Route path='Titan' element={<Titan />} />

          </Route>

          <Route path='Crew' element={<Crew />} />
          <Route path='Technology' element={<Technology />}>

            <Route path='Launch' element={<Launch />} />
            <Route path='SpacePort' element={<SpacePort />} />
            <Route path='SpaceCapsule' element={<SpaceCapsule />} />

          </Route>

        </Routes>
        
      </div>
    </BrowserRouter>

  );
}

export default App;

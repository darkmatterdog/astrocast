import './App.css';
import { Routes, Route } from 'react-router-dom';

import Main from './views/Main';
import Index from './views/Index';
import Locations from './views/Locations';
import Forecast from './views/Forecast';

function App() {
  return (
    <div className="App">
      <Main/>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/locations/" element={<Locations/>}/>
          <Route path="/locations/:lat/:long/" element={<Forecast/>}/>
          <Route path="/locations/:id" element={<Forecast/>}/>
        </Routes>
    </div>
  );
}

export default App;

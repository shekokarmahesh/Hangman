


import { Route, Routes} from 'react-router-dom';
import React from "react";

import StartGame from './components/pages/StartGame';
import PlayGame from './components/pages/PlayGame';
import HomePage from './components/pages/HomePage';
import SinglePlayerPlayGame from './components/pages/SinglePlayerPlayGame';
function App() {
  

  return (
    
    <div>
      <Routes>

        
      <Route path='/start' element={<StartGame/>}/>
      <Route path='/play' element={<PlayGame/>}/>
      <Route path="/" element={<HomePage/>} />
      <Route path="/singleplayer" element={<SinglePlayerPlayGame/>} />


      </Routes>

    </div>
  )
}

export default App;


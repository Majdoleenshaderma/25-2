
import './App.css';
import Intro from './intro.js';


import NoteApp from './Noteapp.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div >

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Intro />}></Route>
          <Route path='/NoteApp' element={<NoteApp />}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

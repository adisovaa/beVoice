import './App.css';
import MainPage from "./Component/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lesson from "./Component/Lesson/Lesson";
import NavBar from "./Component/NavBar/NavBar";
import Audio from "./Component/Lesson/Audio/Audio";
import Spell from "./Component/Lesson/Spell/Spell";
import Sound from "./Component/Lesson/Sound/Sound";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route exact path='/' element={<MainPage />}/>
                <Route path='/lesson' element={<Lesson />}/>
                <Route path='/audio' element={<Audio />}/>
                <Route path='/spell' element={<Spell />}/>
                <Route path='/sound' element={<Sound />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

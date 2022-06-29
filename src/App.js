import './App.css';
import MainPage from "./Component/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lesson from "./Component/Lesson/Lesson";
import NavBar from "./Component/NavBar/NavBar";
import Audio from "./Component/Lesson/Audio/Audio";
import Spell from "./Component/Lesson/Spell/Spell";
import AudioLesson from "./Component/Lesson/Audio/AudioLesson/AudioLesson";
import Theory from "./Component/Lesson/Audio/AudioLesson/Theory/Theory";
import Practice from "./Component/Lesson/Audio/AudioLesson/Practice/Practice";
import { ModalProvider } from 'react-multi-modal';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <ModalProvider >
                <NavBar/>
                <Routes>
                    <Route path='/' element={<MainPage />}/>
                    <Route path='/lesson' element={<Lesson />}/>
                    <Route path='/audio' element={<Audio />}/>
                    <Route path='/spell' element={<Spell />}/>
                    {/*<Route path='/sound' element={<Sound />}/>*/}
                    <Route path='/audioLesson' element={<AudioLesson />}/>
                    <Route path='/theory' element={<Theory />}/>
                    <Route path='/practice2' element={<Practice />}/>
                </Routes>
            </ModalProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;

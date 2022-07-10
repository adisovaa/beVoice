import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModalProvider } from 'react-multi-modal';
import MainPage from "./Component/MainPage/MainPage";
import Lesson from "./Component/Lesson/Lesson";
import NavBar from "./Component/NavBar/NavBar";
import Audio from "./Component/Lesson/Audio/Audio";
import Spell from "./Component/Lesson/Spell/Spell";
import AudioLesson from "./Component/Lesson/Audio/AudioLesson/AudioLesson";
import Theory from "./Component/Lesson/Audio/AudioLesson/Theory/Theory";
import Practice from "./Component/Lesson/Audio/AudioLesson/Practice/Practice";
import Sound from "./Component/Lesson/Sound/Sound";
import Quiz from "./Component/Lesson/Sound/Quiz/Quiz";
import Drum from "./Component/Lesson/Sound/Drum/Drum";
import Planets from "./Component/Lesson/Sound/Planets/Planets";
import Alphabet from "./Component/Lesson/Spell/Alphabet/Alphabet";
import Words from "./Component/Lesson/Spell/Words/Words";
import WordLearn from "./Component/Lesson/Spell/Words/WordLearn/WordLearn";


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
                    <Route path='/quiz' element={<Quiz />}/>
                    <Route path='/spell' element={<Spell />}/>
                    <Route path='/drum' element={<Drum />}/>
                    <Route path='/audioLesson' element={<AudioLesson />}/>
                    <Route path='/theory' element={<Theory />}/>
                    <Route path='/practice' element={<Practice />}/>
                    <Route path='/sound' element={<Sound />}/>
                    <Route path='/planets' element={<Planets />}/>
                    <Route path='/alphabet' element={<Alphabet />}/>
                    <Route path='/words' element={<Words />}/>
                    <Route path='/wordslearn' element={<WordLearn />}/>
                </Routes>
            </ModalProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
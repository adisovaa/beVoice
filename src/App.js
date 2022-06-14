import './App.css';
import MainPage from "./Component/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lesson from "./Component/Lesson/Lesson";
import NavBar from "./Component/NavBar/NavBar";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route exact path='/' element={<MainPage />}/>
                <Route path='/lesson' element={<Lesson />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

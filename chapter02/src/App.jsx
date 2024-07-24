import './App.css'
import Home from "./routes/Home.jsx";
import {Route, Routes} from "react-router-dom";
import About from "./routes/About.jsx";
import Navigation from "./components/Navigation.jsx";
import Detail from "./routes/Detail.jsx";

function App() {

    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/movie-detail" element={<Detail/>}/>
            </Routes>
        </div>
    );
}

export default App


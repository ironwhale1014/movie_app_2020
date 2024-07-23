import './App.css'
import {useEffect, useState} from "react";


function App() {

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 6000);
    }, []);

    return (<div className="App">
        {isLoading ? 'Loading...' : 'We are ready'}
    </div>)
}

export default App

import "./Home.css"
import Movie from "../components/Movie.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {


    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {

        const {
            data: {
                data: {movies}
            }
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        setMovies(movies);
        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);


    return (<section className="container">
        {isLoading ? <div className="loader">
            <span className="loader__text">Loading...</span>
        </div> : <div className="movies">
            {movies.map((movie) => {
                return <Movie key={movie.id}
                              id={movie.id}
                              year={movie.year}
                              summary={movie.summary}
                              title={movie.title}
                              poster={movie.medium_cover_image}
                              genres={movie.genres}/>
            })};
        </div>}
    </section>);
}

export default Home
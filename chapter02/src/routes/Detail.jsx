import "./Detail.css"
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Detail = () => {
    const location = useLocation();
    const nav = useNavigate();

    console.log(location.state === null);

    useEffect(() => {

        console.log("useEffect");
        if (!location.state) {
            nav("/")
        }
    }, [location.state, nav]);

    if (!location.state) {
        return null;
    }

    const {title, year, summary, poster, genres} = location.state;
    return (<div className="detail">
        <span className="movie__title">{title}</span>
        <span className="movie__year">{year}</span>
    </div>);
}

export default Detail;
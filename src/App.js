import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//fetch data from this api as soon as the app loads(useEffect)
const API_URL = 'http://www.omdbapi.com?apikey=b85c9b';

const movie1 = {
    
        "Title": "Life Undefined",
        "Year": "2020",
        "imdbID": "tt10229024",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMWZmMzY5MjctMWVmMS00OTljLTgxYjgtZDhlNjYwNWJhNzRjXkEyXkFqcGdeQXVyNjExMDY4NTE@._V1_SX300.jpg"
    
}

const App = () => {

    const[movies,setMovies] = useState([]);
    const[searchTerm, setSearchTerm] = useState('');

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`); //call api
        const data = await response.json();

        console.log(data.Search);
    }
    useEffect(() => {
        searchMovies();
    },[]);

    return (
        <div className="app">
            <h1>MovieLand</h1>
        <div className="search">
            <input 
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
                src = {SearchIcon}
                alt = "search"
                onClick={() => searchMovies(searchTerm)}
            />
         </div>  
         {
            movies.length > 0 
            ? (
                <div className="container">
                {movies.map((movie) => (
                  <MovieCard movie = {movie} />
                ))}
                </div>
            ) :
            (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>

            )
         } 
            
        </div>
     
    );
}

export default App;


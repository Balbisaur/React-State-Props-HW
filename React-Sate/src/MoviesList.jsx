import React, { useState } from "react";
import './MoviesList.css'; 

const MoviesList = () => {
    // Task 1: Initialize state with a list of movies
    const [movies, setMovies] = useState([
        { id: 1, title: 'Inception', genre: 'Sci-Fi', description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg' },
        { id: 2, title: 'The Dark Knight', genre: 'Action', description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg' },
        { id: 3, title: 'Interstellar', genre: 'Sci-Fi', description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', image: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg' },
        { id: 4, title: 'The Shawshank Redemption', genre: 'Drama', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', image: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg' },
        { id: 5, title: 'Forrest Gump', genre: 'Drama', description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.', image: 'https://m.media-amazon.com/images/I/718o2FI-a0L._AC_UF1000,1000_QL80_.jpg' }
    ]);

    // Task 2: Implement toggle for displaying movie details
    const [detailsVisible, setDetailsVisible] = useState({});

    const toggleDetails = (id) => {
        setDetailsVisible({
            ...detailsVisible,
            [id]: !detailsVisible[id]
        });
    };

    // Task 3: Implement function to remove a movie
    const removeMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    // Task 4: Implement toggle for displaying all movies or by genre
    const [showAllMovies, setShowAllMovies] = useState(true);

    const toggleView = () => {
        setShowAllMovies(!showAllMovies);
    };

    return (
        <div className="container">
            {/* Task 4: Toggle view button */}
            <button className="button" onClick={toggleView}>
                {showAllMovies ? 'Show Sci-Fi Movies' : 'Show All Movies'}
            </button>

            <ul className="movies-list">
                {/* Task 2 & 4: Map through the movies and display them */}
                {movies.map(movie => (
                    (showAllMovies || movie.genre === 'Sci-Fi') &&
                    <li key={movie.id} className="movie">
                        <h3 className="movie-title" onClick={() => toggleDetails(movie.id)}>
                            {movie.title}
                        </h3>
                        <img src={movie.image} alt={movie.title} className="movie-image" />
                        {detailsVisible[movie.id] &&
                            <p className="movie-description">{movie.description}</p>
                        }
                        <button className="button button-remove" onClick={() => removeMovie(movie.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;


import React from 'react';

const API_IMAGE = "https://image.tmdb.org/t/p/w1280"

const Movie = ({title, poster_path, overview, vote_average}) => {
    return (
        <div className='movie'>
            <img src={API_IMAGE + poster_path} alt={title} />
            <div className='movie_information'>
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className='movie_description'>
                <h2>Overwiew:</h2>
                <span>{overview}</span>
            </div>
        </div>
    )
}

export default Movie;
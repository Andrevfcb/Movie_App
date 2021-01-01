import React from 'react';

const API_IMAGE = "https://image.tmdb.org/t/p/w1280"

const Movie = ({title, poster_path, overview, popularity}) => {
    return (
        <div className='movie'>
            <img src={API_IMAGE + poster_path} />
        </div>
    )
}

export default Movie;
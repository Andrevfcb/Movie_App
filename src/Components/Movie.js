import React from 'react';

const API_IMAGE = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if (vote >= 8) return 'green'
    else if (vote >= 4) return 'orange'
    else return 'red'
}

const Movie = ({title, poster_path, overview, vote_average}) => {

    return (
        <div className='movie'>
            <img src={poster_path ? API_IMAGE + poster_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80"} alt={title} />
            <div className='movie_information'>
                <h3>{title}</h3>
                <div className='tag'>
                    <span className={setVoteClass(vote_average)}>{vote_average}</span>
                </div>
            </div>
            <div className='movie_description'>
                <h2>Overwiew:</h2>
                <span>{overview}</span>
            </div>
        </div>
    )
}

export default Movie;
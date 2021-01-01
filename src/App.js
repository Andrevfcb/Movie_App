import React, {useEffect, useState} from 'react';
import Movie from './Components/Movie'

const API_FEATURED = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"


const App = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(API_FEATURED)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results)
      console.log(data);
    })
  }, [])

  return (
  <div className="movies_container">
    {movies.map((movie) => {
       return <Movie key={movie.id} {...movie}/>
    })}
  </div>
)
}

export default App;

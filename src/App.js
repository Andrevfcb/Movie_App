import React, {useEffect, useState} from 'react';
import Movie from './Components/Movie';

const API_FEATURED = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, handleSearchTerm] = useState('');

  useEffect(() => {
    getMovies(API_FEATURED)
  }, [])

  const getMovies = (API) => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
    getMovies(API_SEARCH + searchTerm)
    handleSearchTerm('');
  }
  }

  const handleChangeSearchTerm = (e) => {
    handleSearchTerm(e.target.value);
  }

  return (
    <>
      <header>
        <h1>MOVIE APP</h1>
        <form onSubmit={handleSubmit}>
          <input type='search' placeholder='Search...' value={searchTerm} onChange={handleChangeSearchTerm} />
        </form>
      </header>
      <div className="movies_container">
      {movies.length == 0 ? "The movie cannot be found :(" : movies.map((movie) => {
       return <Movie key={movie.id} {...movie}/>
      })}
    </div>
  </>
)
}

export default App;

import "./Movies.css"
import { useEffect, useState } from "react"

function Movies() {
  const[movies, setMovies] = useState([])
  const[selected, setSelected] = useState([])

  useEffect(() =>{
    fetch(`https://resource-ghibli-api-pursuit.onrender.com/films`)
    .then(response => response.json())
    .then(movies => {
      setMovies(movies)
      console.log(" *** MOVIES ***")
      console.log(movies)
    })
    .catch(error => {
      console.error(error)
    })
  },[])
  let handleOnChange =(event)=>{
    event.preventDefault()
    let title = event.target.value
    let selectedMovie = movies.find(movie => {
      console.log("*** MOVIE 2***")
      console.log(movie)
      return movie.title === title
    })
    setSelected(selectedMovie)
  }

  return (
    <div className="movies">
      <h3>Movie List</h3>
      <select onChange={handleOnChange}>
          {movies.map((movie) => {
              return (
                  <option key={movie.id}>{movie.title}</option>
              )
          })}
      </select>
        {selected ? (
          <div className="movie-info">
              <h2><span className="color">Title: </span>{selected.title}</h2>
              <h4><span className="color">Release Date:</span> {selected.release_date}</h4>
              <h4><span className="color">Release Date:</span> {selected.description}</h4>
          </div>
        ) : "Not Found"}
    </div>
  );
}

export default Movies;
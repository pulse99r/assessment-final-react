
function Fetch() {
  const[movies, setMovies] = useState([])
  const[selected, setSelected] = useState([])

  useEffect(() =>{
    fetch(`https://resource-ghibli-api-pursuit.onrender.com/films`)
    .then(response => response.json())
    .then(movies => {
      setMovies(movies)
      // console.log(" *** EPISODES ***")
      // console.log(episodes)
    })
    .catch(error => {
      console.error(error)
    })
  },[])
}

export default Fetch;
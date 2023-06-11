import { Route, Routes } from "react-router-dom";
import "./components/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";


function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route path= "/" element = { <Home />}/>
          <Route path= "/movies" element = { <Movies />}/>
          <Route path= "/people" element = { <People />}/>
          <Route path= "/locations" element = { <Locations />}/>
        </Routes>
    </div>
  );
}

export default App;


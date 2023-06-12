import "./Locations.css"
import { useEffect, useState } from "react"
import LocationList from "./LocationsList"

function Locations() {
      const[locations, setLocations] = useState([])
      const[selectedLocation, setSelectedLocation] = useState([])
      const[toggleButton, setToggleButton]=useState([])
    
      useEffect(() =>{
        fetch(`https://resource-ghibli-api-pursuit.onrender.com/locations`)
        .then(response => response.json())
        .then(locations => {
          setLocations(locations)
          console.log(" *** LOCATIONS ***")
          console.log(locations)
        })
        .catch(error => {
          console.error(error)
        })
      },[])
      let handleOnChange =(event)=>{
        event.preventDefault()
        let clickedLocation = event.target.value
        let selectedLocation = locations.find(location => {
          console.log("*** LOCATION 2***")
          console.log(location)
          return location.id === clickedLocation
        })
        setSelectedLocation(clickedLocation)
      }

      let handleToggleButton = (event) =>{
        let showButton = event.target.value ==="Show Locations" ? "Show Locations" : "Hide Locations";
        // let hideButton = "Hide Locations" 
        setToggleButton(showButton)
        console.log("TOGGLE Button: ", toggleButton)
      }

      return (
        <div className="locations">
          <h3>List of Locations</h3>
          <form>
            <button onClick={handleToggleButton}>{toggleButton}
            </button>
          </form>
          
      
          </div>
      );
    }
    
export default Locations;


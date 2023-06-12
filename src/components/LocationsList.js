import "./LocationsList.css"

function LocationList(selectedLocation){
  return (
    <div className="locations">
    {selectedLocation ? (
    <div className="location-info">
        <h2><span className="color">Name:</span>{selectedLocation.name}</h2>
        <h4><span className="color">climate</span> {selectedLocation.climate}</h4>
        <h4><span className="color">Terrain:</span> {selectedLocation.terrain}</h4>
    </div>
    ) : "Not Found"}
    </div>
  )
  
}

export default LocationList;
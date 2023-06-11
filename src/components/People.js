import "./People.css"

import { useEffect, useState } from "react"


function People() {

    const[people, setPeople] = useState([])
    const[selectedPerson, setSelectedPerson] = useState([])
  
    useEffect(() =>{
      fetch(`https://resource-ghibli-api-pursuit.onrender.com/people`)
      .then(response => response.json())
      .then(people => {
        setPeople(people)
        console.log(" *** PEOPLE ***")
        console.log(people)
      })
      .catch(error => {
        console.error(error)
      })
    },[])
    
    let handleOnChange =(event)=>{
      let personName = event.target.value
      let selectedPerson = people.find(person => {
        // console.log("*** PERSON***")
        // console.log(seleperson)
        return person.name === personName
      })
      console.log("selectedPerson")
      console.log(selectedPerson)
      setSelectedPerson(selectedPerson)
    }
  
    return (
      <div className="people">
        <h3>Search for a Person</h3>
        <form>
          <label>
            <input type="text" onChange={handleOnChange}></input>
            <button type="submit" >Submit</button>

          </label>
        </form>
  
              {selectedPerson ? (
            <div className="person-detail">
                <h2><span className="color">Name: </span>{selectedPerson.name}</h2>
                <h4><span className="color">Age:</span> {selectedPerson.age}</h4>
                <h4><span className="color">Eye Color:</span> {selectedPerson.eye_color}</h4>
                <h4><span className="color">Hair Color:</span> {selectedPerson.hair_color}</h4>

            </div>
              ) : null} 
        </div>
    );
  }
  
export default People;
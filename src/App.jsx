import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentAge, setCurrentAge] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [preferedDays, setPreferedDays] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value)
  }

  
  
  function handleLastNameChange(event) {
    setLastName(event.target.value)
  }



  function handleCurrentAgeChange(event) {
    setCurrentAge(event.target.value)
  }



  function handleCurrentWeightChange(event) {
    setCurrentWeight(event.target.value)
  }



  function handleGoalWeightChange(event) {
    setGoalWeight(event.target.value)
  }



  function handlePreferedDaysChange(event) {
    setPreferedDays(event.target.value)
  }



  function handleContactNumberChange(event) {
    setContactNumber(event.target.value)
  }



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Learning React</h1>
    


      <label for="fname">First Name</label>
      <input onChange={handleFirstNameChange} type="text" id="fname" name="fname"/>

      <br />

      <label for="lname">Last Name</label>
      <input onChange={handleLastNameChange}  type="text" id="lname" name="lname"/>

      <br />

      <label for="age">Current Age</label>
      <input onChange={handleCurrentAgeChange} type="text" id="age" name="age"/>

      <br />

      <label for="weight">Current Weight</label>
      <input onChange={handleCurrentWeightChange} type="text" id="weight" name="weight"/>

      <br />

      <label for="goal">Weight Goal</label>
      <input onChange={handleGoalWeightChange} type="text" id="goal" name="goal"/>

      <br />

      <label for="days">Prefered Days</label>
      <input onChange={handlePreferedDaysChange} type="text" id="days" name="days"/>

      <br />

      <label for="contact">Contact Number</label>
      <input onChange={handleContactNumberChange} type="text" id="contact" name="contact"/>
      
      <p>Name: {firstName} {lastName}</p>
      <p>Age: {currentAge}</p>
      <p>Current Weight: {currentWeight}</p>
      <p>Goal Weight: {goalWeight}</p>
      <p>Prefered Days of Exercise: {preferedDays}</p>
      <p>Contact Number: {contactNumber}</p>

      <button>Submit</button>

    </>
  )
}

export default App

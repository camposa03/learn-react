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
    setFirstName(event.target.value);
  }

  
  
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }



  function handleCurrentAgeChange(event) {
    setCurrentAge(event.target.value);
  }



  function handleCurrentWeightChange(event) {
    setCurrentWeight(event.target.value);
  }



  function handleGoalWeightChange(event) {
    setGoalWeight(event.target.value);
  }



  function handlePreferedDaysChange(event) {
    setPreferedDays(event.target.value);
  }



  function handleContactNumberChange(event) {
    setContactNumber(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formValues = {
      firstName: firstName,
      lastName: lastName,
      currentAge: currentAge,
      currentWeight: currentWeight,
      goalWeight: goalWeight,
      preferedDays: preferedDays,
      contactNumber: contactNumber
    };
    const isValid = validate(formValues);
    if (isValid) {
      alert ("Submitted");
    } else {
      alert("Fill out Form!");
    }
  }

    function validate(formValues) {
      const currentAgeNum = isNaN(parseInt(formValues.currentAge, 10));
      console.log(currentAgeNum)
      if (currentAgeNum) {
        return false;
      }
      const currentWeightNum = isNaN(parseInt(formValues.currentWeightNum, 10));
      console.log(currentWeightNum)
      if (currentWeightNum) {
        return false;
      }
      const currentGoalNum = isNaN(parseInt(formValues.currentGoalNum, 10));
      console.log(currentGoalNum)
      if (currentGoalNum) {
        return false;
      }
      const preferedDaysNum = isNaN(parseInt(formValues.preferedDaysNum, 10));
      console.log(preferedDaysNum)
      if (preferedDaysNum) {
        return false;
      }
      const contactNum = isNaN(parseInt(formValues.contactNum, 10));
      console.log(contacttNum)
      if (contactNum) {
        return false;
      }
      if (formValues.firstName.trim() === "" ||
          formValues.lastName.trim() === "" ||
          formValues.currentAge.trim() === "" ||
          formValues.currentWeight.trim() === ""||
          formValues.goalWeight.trim() === "" ||
          formValues.preferedDays.trim() === "" ||
          formValues.contactNumber.trim() === ""
          )  {
            return false;
      }
        return true;
    
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
      <h1>Questionnaire</h1>
    

    <form action="#" onSubmit={handleSubmit}>
      <label htmlFor="fname">First Name</label>
      <input onChange={handleFirstNameChange} type="text" id="fname" name="fname"/>

      <br />

      <label htmlFor="lname">Last Name</label>
      <input onChange={handleLastNameChange}  type="text" id="lname" name="lname"/>

      <br />

      <label htmlFor="age">Current Age</label>
      <input onChange={handleCurrentAgeChange} type="number" id="age" name="age"/>

      <br />

      <label htmlFor="weight">Current Weight</label>
      <input onChange={handleCurrentWeightChange} type="text" id="weight" name="weight"/>

      <br />

      <label htmlFor="goal">Weight Goal</label>
      <input onChange={handleGoalWeightChange} type="text" id="goal" name="goal"/>

      <br />

      <label htmlFor="days">Prefered Days</label>
      <input onChange={handlePreferedDaysChange} type="text" id="days" name="days"/>

      <br />

      <label htmlFor="contact">Contact Number</label>
      <input onChange={handleContactNumberChange} type="text" id="contact" name="contact"/>
      
      <p>Name: {firstName} {lastName}</p>
      <p>Age: {currentAge}</p>
      <p>Current Weight: {currentWeight}</p>
      <p>Goal Weight: {goalWeight}</p>
      <p>Prefered Days of Exercise: {preferedDays}</p>
      <p>Contact Number: {contactNumber}</p>

      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default App

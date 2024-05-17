import { useState } from 'react'
import './App.css'

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&display=swap');
</style>


function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentAge, setCurrentAge] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [preferedDays, setPreferedDays] = useState("");
  const [conditions, setConditions] = useState("");
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



  function handleConditionsChange(event) {
    setConditions(event.target.value);
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
      conditions: conditions,
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
          formValues.conditions.trim() === "" ||
          formValues.contactNumber.trim() === ""
          )  {
            return false;
      }
        return true;
    
    }

    function calculateBMI() {

      let weight = document.getElementById('weight').value
      let height = document.getElementById('height').value

      let bmi = (weight / (height * height) * 703)

      document.getElementById('heading').innerHTML = 'Your BMI is:'
      document.getElementById('bmi-output').innerHTML = bmi;

    }

  return (
    <>
    <head>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Alice&family=Rubik+Doodle+Shadow&display=swap');
    </style>
    </head>

    
    <h1>Questionnaire</h1>
    

    <form action="#" onSubmit={handleSubmit}>
      <label htmlFor="fname">First Name:</label>
      <input onChange={handleFirstNameChange} type="text" id="fname" name="fname"/>

      <br />

      <label htmlFor="lname">Last Name:</label>
      <input onChange={handleLastNameChange}  type="text" id="lname" name="lname"/>

      <br />

      <label htmlFor="age">Current Age:</label>
      <input onChange={handleCurrentAgeChange} type="number" id="age" name="age"/>

      <br />

      <label htmlFor="weight">Current Weight:</label>
      <input onChange={handleCurrentWeightChange} type="text" id="weight" name="weight"/>

      <br />

      <label htmlFor="goal">Weight Goal:</label>
      <input onChange={handleGoalWeightChange} type="text" id="goal" name="goal"/>

      <br />

      <label htmlFor="days">Prefered Days:</label>
      <input onChange={handlePreferedDaysChange} type="text" id="days" name="days"/>

      <br />

      <label htmlFor="conditions">Health Conditions:</label>
      <input onChange={handleConditionsChange} type="text" id="conditions" name="conditions"/>

      <br />

      <label htmlFor="contact">Contact Number:</label>
      <input onChange={handleContactNumberChange} type="text" id="contact" name="contact"/>
      
      <p>Name: {firstName} {lastName}</p>
      <p>Age: {currentAge}</p>
      <p>Current Weight: {currentWeight}</p>
      <p>Goal Weight: {goalWeight}</p>
      <p>Prefered Days of Exercise: {preferedDays}</p>
      <p>Health Conditions: {conditions}</p>
      <p>Contact Number: {contactNumber}</p>

      <h1>BMI Calculator</h1>
      <label htmlFor="weight">Weight (lbs)</label>
      <input id="weight" type="numbers" /> <br/>
      <label htmlFor="height">Height (in)</label>
      <input id="height" type="numbers" /> <br/>

      <h3 id='heading'></h3>
      <p id='bmi-output'></p>
      <p id='message'></p>

      <button onClick='handleSumbit' type="submit">Submit</button>
      <button onClick='reload()' type="submit">Clear</button>

    </form>
    </>
  )
}

export default App

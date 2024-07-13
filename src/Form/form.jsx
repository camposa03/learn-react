import React from 'react'
import Bmi from '../BMI/BmiCalculator';
import { useState } from 'react';

  

function Form () {

  
  
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

    const isValid = validateForm(formValues);
    if (isValid) {
      console.log("valid")
    } else {
      console.log("invalid")
    };
  }
  
  return (

    
    
    <header>
<div className='preForm'>
          <h1>Help us get to know you!</h1>
          <p>For us to give our best advice, please fill out the following form below!</p>
        </div>
        <form action="#" onSubmit={handleSubmit}>
          <label htmlFor="fname">First Name:</label>
          <input onChange={handleFirstNameChange} type="text" id="fname" name="fname" placeholder='Enter Here...' />

          <br />

          <label htmlFor="lname">Last Name:</label>
          <input onChange={handleLastNameChange} type="text" id="lname" name="lname" placeholder='Enter Here...' />

          <br />

          <label htmlFor="age">Current Age:</label>
          <input onChange={handleCurrentAgeChange} type="number" id="age" name="age" placeholder='Enter Here...' />

          <br />

          <label htmlFor="weight">Current Weight:</label>
          <input onChange={handleCurrentWeightChange} type="text" id="weight" name="weight" placeholder='Enter Here...' />

          <br />

          <label htmlFor="goal">Weight Goal:</label>
          <input onChange={handleGoalWeightChange} type="text" id="goal" name="goal" placeholder='Enter Here...' />

          <br />

          <label htmlFor="days">Prefered Days of Exercise:</label>
          <input onChange={handlePreferedDaysChange} type="text" id="days" name="days" placeholder='Enter Here...' />

          <br />

          <label htmlFor="conditions">Health Conditions:</label>
          <input onChange={handleConditionsChange} type="text" id="conditions" name="conditions" placeholder='Enter Here...' />

          <br />

          <label htmlFor="contact">Contact Number:</label>
          <input onChange={handleContactNumberChange} type="text" id="contact" name="contact" placeholder='Enter Here...' />

          <p>Name: {firstName} {lastName}</p>
          <p>Age: {currentAge}</p>
          <p>Current Weight: {currentWeight}</p>
          <p>Goal Weight: {goalWeight}</p>
          <p>Prefered Days of Exercise: {preferedDays}</p>
          <p>Health Conditions: {conditions}</p>
          <p>Contact Number: {contactNumber}</p>

          <div>
            <h1>BMI Calculator</h1>
            <Bmi weight={currentWeight} />
          </div>

          <div>
            <p>Does this information look correct to you?<br />If so, please submit.</p>
          </div>

          <button onClick={handleSubmit} type="submit">Submit</button>
          <button type="submit">Clear</button>


        </form>
</header>

  )  
};
export default Form
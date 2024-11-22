import React, { useState } from 'react';
import '../Form/form.css';
import validateForm from '../../validateForm';

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentAge, setCurrentAge] = useState("");
  const [height, setCurrentHeight] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [preferedDays, setPreferedDays] = useState("");
  const [conditions, setConditions] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [serverResponse, setServerResponse] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleCurrentAgeChange(event) {
    setCurrentAge(event.target.value);
  }

  function handleCurrentHeightChange(event) {
    setCurrentHeight(event.target.value);
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

  async function handleSubmit(event) {
    event.preventDefault();
    const formValues = {
      firstName: firstName,
      lastName: lastName,
      currentAge: currentAge,
      currentHeight: currentHeight,
      currentWeight: currentWeight,
      goalWeight: goalWeight,
      preferedDays: preferedDays,
      conditions: conditions,
      contactNumber: contactNumber
    };

    const isValid = validateForm(formValues);
    if (isValid) {
      console.log("valid");
      const url = "http://localhost:3000/fitness";
      let response = await postData(url, formValues);
      console.log(response);
    } else {
      console.log("invalid");
    }
  }

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  return (
    <header>
      <div className='preForm'>
        <h1>Contact Form</h1>
        <p>For us to give our best advice, please fill out the following form below!</p>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name:</label>
          <input onChange={handleFirstNameChange} type="text" id="fname" placeholder="Enter Here..." />
        <label htmlFor="lname">Last Name:</label>
          <input onChange={handleLastNameChange} type="text" id="lname" placeholder="Enter Here..." />
        <label htmlFor="age">Current Age:</label>
          <input onChange={handleCurrentAgeChange} type="number" id="age" placeholder="Enter Here..." />
        <label htmlFor="height">Height (in):</label>
          <input onChange={handleCurrentHeightChange} type="number" id="height" placeholder="Height (in)" />
        <label htmlFor="weight">Current Weight:</label>
          <input onChange={handleCurrentWeightChange} type="number" id="weight" placeholder="Weight (lbs)" />
        <label htmlFor="goal">Weight Goal:</label>
          <input onChange={handleGoalWeightChange} type="text" id="goal" placeholder="Enter Here..." />
        <label htmlFor="days">Preferred Days of Exercise:</label>
          <input onChange={handlePreferedDaysChange} type="text" id="days" placeholder="Enter Here..." />
        <label htmlFor="conditions">Health Conditions:</label>
          <input onChange={handleConditionsChange} type="text" id="conditions" placeholder="Enter Here..." />
        <label htmlFor="contact">Contact Number:</label>
        <input onChange={handleContactNumberChange} type="text" id="contact" placeholder="Enter Here..." />
          
        <p>Name: {firstName} {lastName}</p>
        <p>Age: {currentAge}</p>
        <p>Height (in): {height}</p>
        <p>Current Weight (lbs): {currentWeight}</p>
        <p>Goal Weight: {goalWeight}</p>
        <p>Preferred Days of Exercise: {preferedDays}</p>
        <p>Health Conditions: {conditions}</p>
        <p>Contact Number: {contactNumber}</p>

        <p>Response from server: {serverResponse}</p>

        <div>
          <p>Does this information look correct to you?<br />If so, please submit.</p>
        </div>

        <button type="submit">Submit</button>
        <button type="button">Clear</button>
      </form>
    </header>
  );
}

export default Form;

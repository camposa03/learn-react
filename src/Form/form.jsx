import React from 'react'
// import Bmi from '../BMI/BmiCalculator';
import { useState } from 'react';
import '../Form/form.css'
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


  function handleBmiChange(event) {
    setBmi(event.target.value);
  }


  async function handleSubmit(event) {
    event.preventDefault();
    const formValues = {
      firstName: firstName,
      lastName: lastName,
      currentAge: currentAge,
      currentHeight: height,
      currentWeight: currentWeight,
      goalWeight: goalWeight,
      preferedDays: preferedDays,
      conditions: conditions,
      contactNumber: contactNumber,
    };

    const isValid = validateForm(formValues);
    if (isValid) {
      console.log("valid")
      // let response = await getData();
      const url = "http://localhost:3000/fitness";
      let response = await postData(url, formValues) /*/form values = data passed into postData, dont get confused /*/
      console.log(response);
    } else {
      console.log("invalid")
    };
  }

  async function getData() {
    const url = "http://localhost:3000";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setServerResponse(json);
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json(); // parses JSON response into native JavaScript objects
  }



  return (



    <header>
      <div className='preForm'>
        <h1>Contact Form</h1>
        <p>For us to give our best advice, please fill out the following form below!</p>
      </div>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name:</label>
        <input onChange={handleFirstNameChange} type="text" id="name" name="fname" placeholder='Enter Here...' />

        <br />

        <label htmlFor="lname">Last Name:</label>
        <input onChange={handleLastNameChange} type="text" id="lname" name="lname" placeholder='Enter Here...' />

        <br />

        <label htmlFor="age">Current Age:</label>
        <input onChange={handleCurrentAgeChange} type="number" id="age" name="age" placeholder='Enter Here...' />

        <br />

        <label htmlFor="height">Height (in):</label>
        <input type="number" onChange={handleCurrentHeightChange} placeholder="Height (in)" id="height" />

        <br />

        <label htmlFor="weight">Current Weight:</label>
        <input type="number" onChange={handleCurrentWeightChange} placeholder="Weight (lbs)" id="weight" />

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


        {/* <Bmi /> */}

        <p>Name: {firstName} {lastName}</p>
        <p>Age: {currentAge}</p>
        <p>Height (in): {height}</p>
        <p>Current Weight (lbs): {currentWeight}</p>
        <p>Goal Weight: {goalWeight}</p>
        <p>Prefered Days of Exercise: {preferedDays}</p>
        <p>Health Conditions: {conditions}</p>
        <p>Contact Number: {contactNumber}</p>

        <p>Response from server: {serverResponse}</p>


        <div>
          <p>Does this information look correct to you?<br />If so, please submit.</p>
        </div>


        <button onClick={handleSubmit} type="submit">Submit</button>
        <button type="submit">Clear</button>


      </form>
    </header>

  );
};
export default Form
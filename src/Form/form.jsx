import React from 'react'
// import Bmi from '../BMI/BmiCalculator';
import { useState } from 'react';
import '../Form/form.css'
import validateForm from '../../validateForm';

function  Bmi() {
      const bmiCalculator = (props) => {
        const [weight, setWeight] = useState('');
        const [height, setHeight] = useState('');
        const [bmi, setBmi] = useState('');

        const calculateBMI = () => {
          const heightInInch = parseFloat(height);
          const weightByPound = parseFloat(weight);
          if (heightInInch > 0 && weightByPound > 0) {
          const tempBmi = (weightByPound / (heightInInch * heightInInch)) * 703;
          setBmi(bmiValue.toFixed(2));
        };
    };
  };
};

function Form() {



      function  Bmi() {
          const bmiCalculator = (props) => {
            const [weight, setWeight] = useState('');
            const [height, setHeight] = useState('');
            const [bmi, setBmi] = useState('');

            const calculateBMI = () => {
              const heightInInch = parseFloat(height);
              const weightByPound = parseFloat(weight);
              if (heightInInch > 0 && weightByPound > 0) {
              const tempBmi = (weightByPound / (heightInInch * heightInInch)) * 703
              setBmi(bmiValue.toFixed(2));
            };
        };
      };
    };


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [currentAge, setCurrentAge] = useState("");
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [goalWeight, setGoalWeight] = useState("");
    const [preferedDays, setPreferedDays] = useState("");
    const [conditions, setConditions] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [bmi, setBmi] = useState("")

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


    function handleSubmit(event) {
      event.preventDefault();
      const formValues = {
        firstName: firstName,
        lastName: lastName,
        currentAge: currentAge,
        currentHeight: height,
        currentWeight: weight,
        goalWeight: goalWeight,
        preferedDays: preferedDays,
        conditions: conditions,
        contactNumber: contactNumber,
        Bmi: setBmi
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
          <input type="number" placeholder="Height (in)" value={height} onChange={(e) => setHeight(e.target.value)} />

          <br />

          <label htmlFor="weight">Current Weight:</label>
          <input type="number" placeholder="Weight (lbs)" value={weight} onChange={(e) => setWeight(e.target.value)} />

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


          <Bmi />

          <p>Name: {firstName} {lastName}</p>
          <p>Age: {currentAge}</p>
          <p>Height (in): {height}</p>
          <p>Current Weight (lbs): {weight}</p>
          <p>Goal Weight: {goalWeight}</p>
          <p>Prefered Days of Exercise: {preferedDays}</p>
          <p>Health Conditions: {conditions}</p>
          <p>Contact Number: {contactNumber}</p>
          <p>Body Mass Index: {setBmi}</p>



          <div>
            <p>Does this information look correct to you?<br />If so, please submit.</p>
          </div>

          <button onClick={setBmi}>Calculate BMI</button>
          <button onClick={handleSubmit} type="submit">Submit</button>
          <button type="submit">Clear</button>
          

        </form>
      </header>

    );
};
export default Form
import { useState } from 'react'
import './App.css'
import Visionaries from '../assets/Visionaries.png'
import BmiCalculator from '../BMI/BmiCalculator'
import validateForm from '../../validateForm'
import '../NavBar/NavBar.css'


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

    const isValid = validateForm(formValues);
    if (isValid) {
      console.log("valid")
    } else {
      console.log("invalid")
    };
  }

    return (
      <>
        <header>
          <nav>
            <div className="header">
                <img className='logo' src={Visionaries} alt="" />
                <ul className='nav-menu'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Programs</a></li>   
                    <li><a href="#">Merchandise</a></li>
                    <li><a href="#">Contact</a></li>             
                </ul>
            <div className='menu'>
                <i className='menuIcon material-icons'></i>
                <i className='closeIcon material-icons'></i>
            </div>
            <div className='nav_mobile'>
                <div className='nav_mobile_content'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Programs</a></li>   
                <li><a href="#">Merchandise</a></li>
                <li><a href="#">Contact</a></li>
                </div>
            </div>
            </div>
          </nav>
          </header>
      
          <div className="about">
          <h1>About Us</h1>
            <p>Here at Sacred Visionaries, we pride ourselves in holistic fitness! We understand that your journey is unique. <br />
              Redefining your physical, mental, and spiritual relationships isn't easy. That's what we're here for! To guide those willing to <br />
              change their lives. From begginer to advanced, weights or calisthenics, and mindset to nutrition, we can help!<br />
              

            </p>
          </div>


          <div className="Testimonials">
          <h1>Testimonials</h1>
          <p>"Working with Martin has definetly given me a different outook on life!<br/>
          Not only have I seen massive change on my body, my way of thinking changed. Thanks Martin!"<br/>
          -John Doe</p>
          <br/>
          <p>"Rudy has been an inspiration since day one! My relationship with<br/>
          myself and with God has grown massively and I am forever grateful!"<br/>
          -John Doe</p>
          <br/>
          <p>"Sam is a gamechanger! I feel and look way better than 3 months ago.<br/>
          She changed the way I view food and the way I view myself!"<br/>
          </p>
          <br/>
          <p>"I never knew calisthenics would be so fun! Yes, it's super challenging,<br/>
          but my body can do things it wasn't able to years ago! Thanks Joey for being<br/>
          a great coach!"<br/>
          -John Doe</p>
          </div>

      

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
            <BmiCalculator weight={currentWeight} />
          </div>

          <div>
            <p>Does this information look correct to you?<br />If so, please submit.</p>
          </div>

          <button onClick='handleSumbit' type="submit">Submit</button>
          <button onClick='reload()' type="submit">Clear</button>


        </form>




      </>

    );

  

}


export default App;
import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'

const BmiCalculator = (props) => {
    console.log(props);
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');

    const calculateBMI = () => {
      const heightInInch = height;
      console.log(heightInInch);
      const bmiTemp = (props.weight * 703 / heightInInch);
      const bmi = (bmiTemp / heightInInch)
      setBmi(bmi);
    };
    return (
      <div>
        <input type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)} 
          />
          <button onClick={calculateBMI}>
            Calculate BMI
          </button>
          {bmi && <div>BMI:
            {bmi.toFixed(2)}</div>}
        
      </div>
    )
  }

  export default BmiCalculator;
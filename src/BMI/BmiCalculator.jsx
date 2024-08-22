import React from 'react'
import { useState } from 'react'


function Bmi () {

  
  const BmiCalculator = (props) => {
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
          placeholder="Height (in)"
          value={height}
          onChange={(e) => setHeight(e.target.value)} 
          />
          {bmi && <div>BMI:
            {bmi.toFixed(2)}</div>}
        
      </div>
    )
  }
  
}
  export default Bmi;
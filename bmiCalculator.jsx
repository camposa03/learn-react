import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const bmiCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');

    const calculateBMI = () => {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue);
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

  export default bmiCalculator;
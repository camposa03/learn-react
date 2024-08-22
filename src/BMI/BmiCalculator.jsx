import React from 'react'
import { useState } from 'react'
import '../BMI/bmiCalculator.css'


const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBmi = () => {
    const heightInInches = parseFloat(height);
    const weightInPounds = parseFloat(weight);
    if (heightInInches > 0 && weightInPounds > 0) {
      const bmiValue = (weightInPounds / (heightInInches * heightInInches)) * 703;
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue < 24.9) setCategory('Normal weight');
      else if (bmiValue < 29.9) setCategory('Overweight');
      else setCategory('Obesity');
    }
  };

  return (
    <div className="container">
      <h1>Body mass index Calculator</h1>
      <div className="input-group">
        <label>Weight (lbs):</label>
        <input
          type="number"
          placeholder="Weight (lbs)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Height (inches):</label>
        <input
          type="number"
          placeholder="Height (in)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBmi}>Calculate BMI</button>
      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
};
export default BmiCalculator;
import React, { useState } from 'react';
import '../BMI/bmiCalculator.css';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [step, setStep] = useState(1); // Tracks which step the user is on
  const [entries, setEntries] = useState([]); // Keeps a record of inputs

  const handleNext = () => {
    if (step === 1 && weight) {
      setEntries([...entries, `Weight: ${weight} lbs`]);
      setStep(2);
    } else if (step === 2 && height) {
      setEntries([...entries, `Height: ${height} inches`]);
      calculateBmi();
      setStep(3);
    }
  };

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
      setEntries([...entries, `Calculating BMI...`, `Your BMI is ${bmiValue}`]);
    }
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
    setStep(1);
    setEntries([]);
  };

  return (
    <div className="container">
      <h1>Body Mass Index Calculator</h1>
      {step === 1 && (
        <div className="input-group">
          <label>Please input your weight (lbs):</label>
          <input
            type="number"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
      )}
      {step === 2 && (
        <div className="input-group">
          <label>Please input your height (inches):</label>
          <input
            type="number"
            placeholder="Enter height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      )}

      {step === 3 && bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p>Category: {category}</p>
        </div>
      )}
      {step < 3 && (
        <button onClick={handleNext} disabled={(step === 1 && !weight) || (step === 2 && !height)}>
          Next
        </button>
      )}
      {step === 3 && <button onClick={resetCalculator}>Reset</button>}

      <div className="entry-log">
        <h2>Entries:</h2>
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BmiCalculator;

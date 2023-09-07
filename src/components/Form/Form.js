import { useState } from "react";

function Form(props) {
  const [currentSavings, setCurrentSavings] = useState();
  const [yearlySavings, setYearlySavings] = useState();
  const [expectedReturn, setExpectedReturn] = useState();
  const [investmentDuration, setInvestmentDuration] = useState();

  const changeHandlerCurrentSavings = (event) => {
    setCurrentSavings(event.target.value);
  };

  const changeHandlerYearlySavings = (event) => {
    setYearlySavings(event.target.value);
  };

  const changeHandlerExpectedReturn = (event) => {
    setExpectedReturn(event.target.value);
  };

  const changeHandlerInvestmentDuration = (event) => {
    setInvestmentDuration(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    calculateHandler();
  };

  const calculateHandler = () => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    let current_Savings = +currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +yearlySavings; // as mentioned: feel free to change the shape...
    let totalInterest = 0;
    const expected_Return = +expectedReturn / 100;
    const duration = +investmentDuration;

    const yearlyData = []; // per-year results

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = current_Savings * expected_Return;
      totalInterest += yearlyInterest;
      let yearlyInvestCapital = yearlyContribution * (i + 1) + +currentSavings;
      current_Savings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        savingsEndOfYear: current_Savings.toFixed(2),
        yearlyInterest: yearlyInterest.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        yearlyContribution: yearlyInvestCapital,
      });
    }
    console.log(yearlyData);
    props.onCalculated(yearlyData);
    // do something with yearlyData ...
  };

  const resetHandler = () => {
    setCurrentSavings();
    setYearlySavings();
    setExpectedReturn();
    setInvestmentDuration();
  };

  return (
    <form className="form" onSubmit={submitHandler} onReset={resetHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={changeHandlerCurrentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlySavings}
            onChange={changeHandlerYearlySavings}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedReturn}
            onChange={changeHandlerExpectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={investmentDuration}
            onChange={changeHandlerInvestmentDuration}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default Form;

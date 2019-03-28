import React, { Component } from "react";
import InputRange from "react-input-range";
import Calculate from './Calculate';
import '../Styles/App.css';
import "react-input-range/lib/css/index.css";

class App extends Component {
  state = {
    amountValue: 2000,
    monthValue: 10
  };

  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleYearChange = value => {
    this.setState({ monthValue: value });
  };

  render() {
    let { amountValue, monthValue } = this.state;
    return (
      <div className="App">
      <h4>EMI CALCULATOR</h4>
        <h4>Loan Amount ${amountValue}</h4>
        <InputRange
          step={100} 
          maxValue={5000}
          minValue={500}
          value={amountValue}
          onChange={this.handleAmountChange}
        />
        <h4>
          Over {monthValue} Months
        </h4>
        <InputRange
          step={1}
          maxValue={24}
          minValue={6}
          value={monthValue}
          onChange={this.handleYearChange}
        />
        <Calculate month={monthValue} cost={amountValue}/>
        </div>
    );
  }
}
export default App;
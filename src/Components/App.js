import React, { Component } from "react";
import InputRange from "react-input-range";
import Calculate from './Calculate';
import Particles from 'react-particles-js'
import '../Styles/App.css';
import "react-input-range/lib/css/index.css";

 const particlesoption= {
      particles:{
      number: {
        value: 40,
        density: {
          enable: true,
          value_area:500
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      }

    }
    }

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
      < div >
      <strong><center>EMI CALCULATOR</center></strong>
      <Particles className='particles'
      params={particlesoption}/>
      <div className="App">
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
        </div>
        );
  }
}
export default App;

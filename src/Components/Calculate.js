import React, { Component,  } from "react";
import Display from './Display';

class Calculate extends Component {
   constructor() {
    super()
    this.state = {
      interest:[],
      payment:[],
    }
  }
  componentDidMount() {
    this.calc();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calc();
    }
  }
  calc=()=>{
    let { cost, month } = this.props;
    fetch(`https://ftl-frontend-test.herokuapp.com/interest?amount=${cost}&numMonths=${month}`)
    .then(response=> response.json())
    .then((findresponse)=> {
     console.log(findresponse.interestRate)
     console.log(findresponse.monthlyPayment.amount)
     this.setState({
      interest:findresponse.interestRate,payment:findresponse.monthlyPayment.amount})
   })
    }
      
      render() {
        return (
          <div>
          <Display func=<p>{this.state.interest} %</p> text="INTEREST RATE" />
          <Display
          func=<p>$ {this.state.payment}</p>
          text=" EMI" />
          </div>
          );
      }
    }

export default Calculate;

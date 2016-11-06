import React from 'react';
import ReactDOM from 'react-dom';

class InterestComponent extends React.Component {

//Use Uncontrolled component

  constructor(props) {
    super(props);
    this.state = {interestRate : 0.0, finalMoney: 0.0, initMoney: 0.0, value: 0.0};
    this.handleInterestRateChange = this.handleInterestRateChange.bind(this);
    this.handleMoneyChange = this.handleMoneyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.computeInterest = this.computeInterest.bind(this);
  }

  computeInterest () {
    let tmp = this.state.initMoney * this.state.interestRate/100;
    this.setState({finalMoney: tmp});
  }

  handleSubmit(event) {
    this.computeInterest();
  }

  handleInterestRateChange(event) {
    this.setState({interestRate: parseFloat(event.target.value)});
    console.log(parseInt(event.target.value));
    
  }

  handleMoneyChange(event) {
    this.setState({initMoney: parseFloat(event.target.value)});
  }

  render() {
    return (
      <h3>
      Please enter an amount in the first box and an interest rate in the second box. Then press Submit to calculate your final cash value.
      </h3>
      <div>
      
        Likes : <span>{this.state.finalMoney}</span>
      <div>
        <input type="text"
          placeholder="10.00"
          onChange={this.handleMoneyChange} />
          %
        <input type="text"
          placeholder="4"
          onChange={this.handleInterestRateChange} />
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>


        Cash after interest : <span>{this.state.finalMoney}</span>
      
      </div>
    );
  }

}

export default InterestComponent;
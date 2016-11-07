import React from 'react'
import ReactDOM from 'react-dom'
import currencies from '../currencies.json'

class InterestComponent extends React.Component {


  // Use React Uncontrolled component

  constructor (props) {
    super(props)
    
    this.allCurrencies = Object.keys(currencies);
    this.state = {interestRate: 0.0, finalMoney: 0.0, initMoney: 0.0, totalMoney: 0.0, period: 'month', status: ''}
    this.handleInterestRateChange = this.handleInterestRateChange.bind(this)
    this.handleMoneyChange = this.handleMoneyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePeriodChange = this.handlePeriodChange.bind(this)
    this.computeInterest = this.computeInterest.bind(this)
    this.compoundInterest = this.compoundInterest.bind(this)
  }

  //A = P (1 + r/n)^nt --- Compound interest helper function
  compoundInterest (P, r, n, t) {
    var tmp = (1 + (r / 100) / n);
    return P * Math.pow(tmp, (n * t));
  }

  //Compute the interest using compound interest formula
  computeInterest () {
    if (this.state.period === 'month') {
      let totalCashAfterCompound = this.compoundInterest(this.state.initMoney, this.state.interestRate, 12, 1/12);

      this.setState({finalMoney: (parseFloat(totalCashAfterCompound.toFixed(2)) - parseFloat(this.state.initMoney).toFixed(2)).toFixed(2) });
      this.setState({totalMoney: totalCashAfterCompound.toFixed(2)});

    } else if (this.state.period === 'year') {
      let totalCashAfterCompound = this.compoundInterest(this.state.initMoney, this.state.interestRate, 12, 1);

      this.setState({finalMoney: (parseFloat(totalCashAfterCompound.toFixed(2) - parseFloat(this.state.initMoney).toFixed(2))).toFixed(2)});
      this.setState({totalMoney: (totalCashAfterCompound.toFixed(2))});
    }
    //React setState is not synchronous so the following code can be used to guarantee behaviour. However, this is obviously not optimal. The above implementation is more optimal
    //this.forceUpdate( () => {this.setState({totalMoney: (this.state.initMoney + this.state.finalMoney)});} );
  }

  //Handles submit button firing
  handleSubmit (event) {
    this.computeInterest();
  }


  //State change handlers---------------------------------

  handleInterestRateChange (event) {
    if (isNaN(event.target.value)) {
      this.setState({status: 'Entered an invalid Interest Rate, please enter a number'});
      this.setState({finalMoney: 0});
      this.setState({initMoney: 0});
      return
    }
    this.setState({status: ""});
    this.setState({interestRate: parseFloat(event.target.value)})
  }

  handleMoneyChange (event) {
    if (isNaN(event.target.value)) {
      this.setState({status: 'Entered an invalid cash value, please enter a number'});
      this.setState({finalMoney: 0});
      this.setState({initMoney: 0});
      return
    }
    this.setState({status: ""});
    this.setState({initMoney: parseFloat(event.target.value)})
  }

  handlePeriodChange (event) {
    this.setState({period: String(event.target.value)})
  }


  //React Render ---------------------------------------
  render () {
    return (
      <div>
        <h3>Please enter an amount in the first box and a yearly interest rate in the second box. Then press Submit to calculate your final cash value.</h3>
        <div>
          <div class = 'style-4'>
          <span> Interest Rate </span>
            <input class = 'style-4' id = 'interestTextBox' type='text' placeholder='yearly interest' onChange={this.handleInterestRateChange} /> 
            <span> Cash </span>
            <input class = 'style-4' id = 'moneyTextBox' type='text' placeholder='$$$' onChange={this.handleMoneyChange} />
            <select name='period' onChange={this.handlePeriodChange}>
              <option value='month'>
                Month
              </option>
              <option value='year'>
                Year
              </option>
            </select>
            <select name='currency'>
            {this.allCurrencies.map(function(curr,i){
              return (
            <option>
            {curr}
            </option>
          );
            })} 

            </select>
            <button onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
          <div>
            <span>{this.state.status}</span>
          </div>
          <div>
            Interest : <span>{this.state.finalMoney}</span>
          </div>
          <div>
            Cash after interest : <span>{this.state.totalMoney}</span>
          </div>
        </div>
      </div>
    )
  }

}

export default InterestComponent

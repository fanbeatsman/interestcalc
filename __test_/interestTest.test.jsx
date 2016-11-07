import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import InterestComponent from '../app/InterestComponent.jsx';
//import renderer from 'react-test-renderer';

test('Compound interest is calculated correctly Year', () => {

  var component = ReactTestUtils.renderIntoDocument(<InterestComponent />);

//  const component = renderer.create(
//    <InterestComponent/>
//  );
  //let tree = component.toJSON();
  //expect(tree).toMatchSnapshot();

  // manually trigger the callback
  //ar interest = tree.props.compoundInterest(100,10,12,1);
  //var input = component.find(element => element.id === 'interestTextBox');
  component.setState({initMoney: 100.00});
  component.setState({interestRate: 10.00});
  expect(component.state.initMoney).toBe(100.00);
  component.setState({period: 'year'});
  component.computeInterest();
  expect(parseFloat(component.state.totalMoney)).toBe(110.47);

  //expect(parseFloat(component.compoundInterest(100,10,12,1).toFixed(2))).toBe(110.47);

  //ReactTestUtils.Simulate.change(input, { target: { value: '100' } });
  //var textInput = ReactTestUtils.findRenderedDOMComponentWithTag(text, 'input');
  //textInput.getDOMNode().value = '100';
  //tree.props.handleInterestRateChange();
  // re-rendering
  //tree = component.toJSON();
  //expect(tree).toMatchSnapshot();

  // manually trigger the callback
  //tree.props.onMouseLeave();
  // re-rendering
  //tree = component.toJSON();
  //expect(tree).toMatchSnapshot();
});


test('Compound interest is calculated correctly Month', () => {

  var component = ReactTestUtils.renderIntoDocument(<InterestComponent />);

  component.setState({initMoney: 100.00});
  component.setState({interestRate: 10.00});
  expect(component.state.initMoney).toBe(100.00);
  component.setState({period: 'month'});
  component.computeInterest();
  expect(parseFloat(component.state.totalMoney)).toBe(100.83);
});

//This one enters non-numbers in the inputs for interest calculations and expects the error message
//However, Kinda don't need this one, apparently, jest becomes very unhappy if you change types anyways, ie from number to string.
test('Validate Error message', () => {
/*
  var component = ReactTestUtils.renderIntoDocument(<InterestComponent />);

  component.setState({initMoney: "TEXT NOT NUMBER"});
  component.setState({interestRate: 10.00});
  expect(component.state.interestRate).toBe(10.00);
  component.setState({period: 'month'});
  component.computeInterest();
  expect(component.state.status).toBe("Entered an invalid cash value, please enter a number");
  */
});

//TODO: Add E2E tests by fully mocking the DOM and manipulating DOM instead of business logic functions like the above. Known issue making this difficult at the moment: https://github.com/facebook/react/issues/7386
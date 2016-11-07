import React from 'react';
import {render} from 'react-dom';
import InterestComponent from './InterestComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Interest Calculator</p>
        <InterestComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));


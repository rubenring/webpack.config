import React from 'react';
import Counter from '../containers/CounterContainer';
import Tictac from '../containers/TicTacContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Tictac />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Tictac from '../containers/TicTacContainer';
import Chat from './Chat';

const appStyles = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start"
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={appStyles}>
        <Chat />
        <Tictac />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Tictac from '../containers/TicTacContainer';
import Chat from './Chat';
import Username from './UserName';
import { connect } from 'react-redux';

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
        { this.props.user.username ? <Chat /> : <Username /> }        
        <Tictac />
      </div>
    );
  }
}

export default connect(state => ({user: state.chat.user}))(App);

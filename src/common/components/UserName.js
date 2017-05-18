import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usernameActions from '../actions/usernameActions';

class Username extends React.Component {
    constructor(props){
        super(props)
    }
    handleSetUsername() {
        this.props.setUsername(this.refs.username.value)
    }
    handleEnter($event){
        if($event.key === 'Enter')
        this.handleSetUsername();
    }
    render(){   
        return (
            <article>
                <h2>Velg ditt navn</h2>
                <input onKeyPress={this.handleEnter.bind(this)} placeholder="Ditt brukernavn" defaultValue={this.props.username} type="text" ref="username" />
                <button onClick={this.handleSetUsername.bind(this)}>Gå videre</button>
            </article>
        )
    }
};

const mapStateToProps = (state) => ({
    username: state.chat.username 
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(usernameActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Username);
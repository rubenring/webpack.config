import React from 'react';
import { connect } from 'react-redux';
import * as ChatActions from '../actions/chatActions';
import { bindActionCreators } from 'redux';

const chatStyles = {
    display: "inline-block"
}
const messageStyle = {
    margin: "0.2em 0 0.2em 0",
    padding: "0.4em",
    backgroundColor: "#f3f3f3",
    name: {
        fontWeight: "bold"
    }
}
const messageListStyle = {
    margin: "1em 0"
}

class Chat extends React.Component {
    constructor(props){
        super(props)
    }
    handleSendMessage(){
        this.props.sendMessage(this.refs.message.value)
        this.refs.message.value = "";
    }
    handleKeyPress($event) {
        if($event.key === 'Enter')
        this.handleSendMessage();
    }
    render() {
        return (
            <article style={chatStyles}>
                <header>
                    <h2>Chat med motstanderen</h2>
                    <p>Hei {this.props.chat.username}</p>
                </header>
                <article style={messageListStyle}>
                    {
                        this.props.chat.messagelist.map( msg => {
                            return (
                                <section
                                    key={msg.message.id}
                                    style={messageStyle}>
                                        <p style={messageStyle.name}>{msg.message.username}</p>
                                        <p>{msg.message.text}</p>
                                </section>
                            )
                        })
                    }

                </article>
                <input type="text" onKeyPress={this.handleKeyPress.bind(this)} placeholder="Din melding" ref="message" />
                <button onClick={this.handleSendMessage.bind(this)}>Send</button>
            </article>
        )
    }
};

const mapStateToProps = (state) => ({
  chat: state.chat
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ChatActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
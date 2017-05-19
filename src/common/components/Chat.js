import React from 'react';
import { connect } from 'react-redux';
import * as ChatActions from '../actions/chatActions';
import { bindActionCreators } from 'redux';

import io from 'socket.io-client'; 

const socket = io('http://localhost:3000');

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
        socket.on('message_recived', (payload) => {   
                this.props.reciveMessage({
                    msg: payload.message.msg,
                    user: payload.message.user
                });
            }
        );
    }
    componentDidMount(){
        socket.emit('chat', {
            room: "Chatroom"
        });
    }
    componentWillUnmount() {  
        socket.emit('exit_chat', {
            room: "Chatroom"
        })
    }
    handleSendMessage(){
        this.props.sendMessage(this.refs.message.value);
        socket.emit('new_message', {
            room: "Chatroom",
            message: {
                msg: this.refs.message.value,
                user: this.props.chat.user.username
            }
        })
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
                    <p>Hei {this.props.chat.user.username}</p>
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
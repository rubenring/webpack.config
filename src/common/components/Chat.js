import React from 'react';

const chatStyles = {
    display: "inline-block"
}

const Chat = () => (
    <section style={chatStyles}>
        <header>
            <h2>Chat med motstanderen.</h2>
        </header>
        <input type="text" />
        <button>Send</button>
    </section>
);

export default Chat;
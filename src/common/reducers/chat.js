import {
    SEND_MESSAGE,
    RECIVE_MESSAGE
} from '../actions/chatActions'
import {
    SET_USERNAME
} from '../actions/usernameActions'
import ChatState from '../../constants/Chat'
const initialState = ChatState;

const chat = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return Object.assign({}, state, {
                    user: action.payload
                }
             )
        case SEND_MESSAGE:
            const newState = Object.assign({}, state, 
                {
                    message: Object.assign({}, state.message, {
                        id: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                            let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                            return v.toString(16);
                        }),
                        text: action.payload,
                        username: state.user.username,
                    }),
                }
            );
            return Object.assign({}, state, {
                messagelist: state.messagelist.concat({message: newState.message})
            })
        case RECIVE_MESSAGE: 
            return Object.assign({}, state, {
                messagelist: state.messagelist.concat({
                    message: {
                        id: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                            let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                            return v.toString(16);
                        }),
                        text: action.payload.msg,
                        username: action.payload.user
                    }
                })
            });
        default:
            return state
    }
}

export default chat
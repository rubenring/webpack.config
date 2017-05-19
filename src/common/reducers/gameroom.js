import {ENTER_ROOM, CREATE_ROOM } from '../actions/usernameActions';
import gameRoomState from '../../constants/gameroom';
const initalState = gameRoomState;
const createRoom = (state, user) =>{
    let id = Math.floor(Math.random() * 1000 + 1);
    return Object.assign({}, state, {
        currentRoom: Object.assign({}, state.currentRoom, {
            roomId: id,
            roomName: "gameroom" + id,
            players: state.currentRoom.players.concat({
                username: user.username,
                userId: user.userId
            })
        })
    })
}
const enterRoom = (state, user) => {
    return state
}
const gameroom = (state = initalState, action) => {
    switch(action.type){
        case ENTER_ROOM:
            return enterRoom(state, action.payload);
        case CREATE_ROOM:
            return createRoom(state, action.payload)        
        default:
            return state
    }
}
export default gameroom;
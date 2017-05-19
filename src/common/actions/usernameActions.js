export const SET_USERNAME = 'SET_USERNAME';
export const ENTER_ROOM = 'ENTER_ROOM';
export const CREATE_ROOM = 'CREATE_ROOM';

export const setUsername = (username) => (dispatch, getState) => {
    let user = {
        userId: Math.floor(Math.random() * 100 + 1),
        username
    }
    const { gameroom } = getState()
    dispatch(addUser(user))    
    gameroom.currentRoom.players.length >= 2  || gameroom.roomlist.length === 0 ? dispatch(createRoom(user)) : dispatch(enterRoom(user));
}

const addUser = (user) => ({  
    type: SET_USERNAME,
    payload: user    
})

const enterRoom = (payload) => ({
    type: ENTER_ROOM,
    payload
})


const createRoom = (payload) => ({
    type: CREATE_ROOM,
    payload
})

export const SEND_MESSAGE  = 'SEND_MESSAGE';
export const RECIVE_MESSAGE = 'RECIVE_MESSAGE';

export const sendMessage = (msg) => ({
    type: SEND_MESSAGE,
    payload: msg
})

export const reciveMessage = (payload) => ({
    type: RECIVE_MESSAGE,
    payload
})
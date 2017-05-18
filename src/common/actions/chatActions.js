export const SEND_MESSAGE  = 'SEND_MESSAGE';

export const sendMessage = (msg) => ({
    type: SEND_MESSAGE,
    payload: msg
})
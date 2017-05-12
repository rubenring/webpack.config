export const CLEAR_BOARD  = 'CLEAR_BOARD';
export const BACK  = 'BACK';
export const FORWARD = 'FORWARD';
export const DO_MOVE = 'DO_MOVE';

export const doMove = (name) =>({
    type: DO_MOVE,
    payload: name
});

export const goBack = () =>({
    type: BACK
});

export const goForward = () =>({
    type: FORWARD
});

export const clearBoard = () =>({
    type: CLEAR_BOARD
});
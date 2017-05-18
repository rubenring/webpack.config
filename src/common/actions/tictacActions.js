export const CLEAR_BOARD  = 'CLEAR_BOARD';
export const BACK  = 'BACK';
export const DO_MOVE = 'DO_MOVE';

const doNextMove = (name) => ({
    type: DO_MOVE,
    payload: name
})

export const doMove = (name) => (dispatch, getState) =>{
    const { tictacto } = getState();
    let square = tictacto.board.find((v)=>(
        v.name == name
    ))
    if(!square.isSet)
    dispatch(doNextMove(name))
};

export const goBack = () =>({
    type: BACK
});

export const clearBoard = () =>({
    type: CLEAR_BOARD
});
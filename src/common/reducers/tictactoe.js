import {DO_MOVE, CLEAR_BOARD, BACK} from '../actions/tictacActions';
import TicTacState from '../../constants/tictacstate';
const initalState = TicTacState;
const stateList = [];

const setMoves = (state) => {
    return Object.assign({}, state, {
       moves: state.moves + 1,
    });
}

const doMove = (state, payload)=> {
    return Object.assign({}, state, {
        symbol: !state.symbol,
        moves: state.moves + 1,
        board: state.board.map((inst) => {
            if(inst.name == payload && !inst.isSet){
               state
               return Object.assign({}, inst, {
                   isSet: true,
                   symbol: state.symbol ? "X" : "O"
               })
            }
            return inst;
        })
    });
}
const clearBoard = () => {
    return initalState;
}
const goBack = (state)  => {
    if(stateList.length >= 1){
        const prewState = stateList.pop();
        return prewState; 
    }else{
        return state;
    }
   
}


const tictacto = (state = initalState, action) => {
    switch(action.type){
        case DO_MOVE:
            stateList.push(state);
            return doMove(state, action.payload)
        case CLEAR_BOARD:
            stateList.push(state);
            return clearBoard(state)
        case BACK:
            return goBack(state)
        default:
            return state
    }
}
export default tictacto;
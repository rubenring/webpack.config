import {DO_MOVE, CLEAR_BOARD, BACK, FORWARD} from '../actions/tictacActions';
import TicTacState from '../../constants/tictacstate';
const initalState = TicTacState;

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
const goBack = ()  => {
    return state;    
}
const goForward = () => {
    return state;
}

const tictacto = (state = initalState, action) => {
    switch(action.type){
        case DO_MOVE:
            return doMove(state, action.payload)
        case CLEAR_BOARD:
            return clearBoard(state)
        case BACK:
            return goBack(state)
        case FORWARD:
            return goForward(state)
        default:
            return state
    }
}
export default tictacto;
import { combineReducers } from 'redux';
import counter from './counter';
import tictacto from './tictactoe';

const rootReducer = combineReducers({
  counter,
  tictacto
})

export default rootReducer
import { combineReducers } from 'redux';
import tictacto from './tictactoe';
import chat from './chat';
import gameroom from './gameroom';

const rootReducer = combineReducers({
  chat,
  tictacto,
  gameroom
})

export default rootReducer
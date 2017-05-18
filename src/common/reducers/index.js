import { combineReducers } from 'redux';
import tictacto from './tictactoe';
import chat from './chat'
const rootReducer = combineReducers({
  chat,
  tictacto
})

export default rootReducer
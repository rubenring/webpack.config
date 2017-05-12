import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TicTac from '../components/Tictac'
import * as tictacActions from '../actions/tictacActions'

const mapStateToProps = (state) => ({
  board: state.tictacto.board,
  moves: state.tictacto.moves
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(tictacActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TicTac);
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GameBoard from '../components/GameBoard'
import * as tictacActions from '../actions/tictacActions'

const mapStateToProps = (state) => ({
  board: state.tictacto.board,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(tictacActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
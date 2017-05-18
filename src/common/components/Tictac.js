import React from 'react';
import PropTypes from 'prop-types';
import GameBoardContainer from '../containers/GameBoardContainer';
import Header from './Header';
const tickTackStyle = {
    display: "inline-block"
}
const Tictac = ({moves, clearBoard, goBack}) => (
    <section style={tickTackStyle}>
        <Header />
        <GameBoardContainer />
        <div>
            <p><span>Du er på trekk: </span><span>{moves}</span></p>
        </div>     
        <div className="buttons">
            <button onClick={() => goBack()} className="btn-back">Tilbake</button>    
            <button onClick={() => clearBoard()} >Start på nytt</button>        
        </div>
    </section>
);
Tictac.propTypes = {
  moves: PropTypes.number.isRequired,
  clearBoard: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
}
export default Tictac;
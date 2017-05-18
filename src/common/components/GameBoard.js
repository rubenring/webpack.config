import React from 'react';
import Square from './Square';
import PropTypes from 'prop-types';

const style = {
    board: {
        width: "500px",
        padding: 0,
        margin: 0,
        listStyle: "none",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around"
    }
}
const GameBoard = ({board, doMove}) => (
    <article style={style.board}>
    {
        board.map( x => {
            return (
            <Square 
                key={x.name} 
                id={x.name}
                symbol={x.symbol}
                onClick={() => doMove(x.name)}
                >
            </Square>
            )
        })
    }
</article>
);
GameBoard.propTypes = {
  board: PropTypes.array.isRequired,
  doMove: PropTypes.func.isRequired,
}
export default GameBoard;
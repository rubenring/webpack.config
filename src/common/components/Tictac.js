import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
const style = {
    board: {
        width: "650px",
        padding: 0,
        margin: 0,
        listStyle: "none",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around"
    }
}

const Tictac = ({board, moves, doMove, clearBoard}) => (
    <section className="tictac">
        <h2>Tic Tac Toe</h2>
        <article style={style.board}>
            {
                board.map( x => {
                    return <Square 
                        key={x.name} 
                        id={x.name}
                        symbol={x.symbol}
                        onClick={() => doMove(x.name)}
                        >
                        </Square>
                })
            }
        </article>
        <div>
            <p><span>You are on move: </span><span>{moves}</span></p>
        </div>     
        <div className="buttons">
            <button className="btn-forward">Fremover</button>
            <button className="btn-back">Tilbake</button>    
            <button onClick={() => clearBoard()} >Start på nytt</button>        
        </div>
    </section>
);
export default Tictac;
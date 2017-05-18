import React from 'react';
import PropTypes from 'prop-types';

const style = {
    height: "150px",
    width: "150px",
    margin: "0.3em",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}
const symbolStyle = {
    fontSize: "6em",
    verticalAlign: "middle",
    
}

const square = ({id, symbol, onClick}) => (
    <div 
        style={style} 
        id={id}
        onClick={onClick}
    >
        <span style={symbolStyle}>{symbol}</span>
    </div>
);
square.PropTypes = {
    id: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
export default square;
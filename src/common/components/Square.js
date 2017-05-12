import React from 'react';

const style = {
    height: "200px",
    width: "200px",
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
export default square;
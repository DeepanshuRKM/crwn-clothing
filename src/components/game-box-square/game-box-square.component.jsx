import React from 'react';
import './game-box-square.styles.scss';

const GameBoxSquare = (props) => (
    <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
)

export default GameBoxSquare;
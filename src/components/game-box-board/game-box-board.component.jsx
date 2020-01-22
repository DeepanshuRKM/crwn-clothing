import React from 'react';
import './game-box-board.styles.scss';

import GameBoxSquare from '../game-box-square/game-box-square.component'

class GameBoxBoard extends React.Component {

    renderSquare(i) { 
        return (<GameBoxSquare value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />)
    }

    render() { 
        return (
            <div>
                <div className="border-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="border-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="border-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

export default GameBoxBoard;
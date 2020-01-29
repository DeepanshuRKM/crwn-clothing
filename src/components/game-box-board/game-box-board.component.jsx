import React from 'react';
import './game-box-board.styles.scss';
import GameBoxSquare from '../game-box-square/game-box-square.component'

class GameBoxBoard extends React.Component {

    renderSquare(i) { 
        return (<GameBoxSquare value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />)
    }

    render() {
        let squares_index = [0,3,6];

        return (
            <div>
                {
                    squares_index.map((index) => (
                        <div key={index} className="border-row">
                            {this.renderSquare(index)}
                            {this.renderSquare(index + 1)}
                            {this.renderSquare(index + 2)}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default GameBoxBoard;
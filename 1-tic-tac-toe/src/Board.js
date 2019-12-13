import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Square from './Square';
import './Board.css';
import PropTypes from 'prop-types';

class Board extends React.Component {

    

    renderSquare(i) {
        return <Square
            key={i}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />;
    }

    render() {

        return (
            <div>
                {new Array(3).fill(1).map((row, rowInd) => (
                    <div key={rowInd} className="board-row">
                        {new Array(3).fill(1).map((square, squareInd) => (
                            this.renderSquare(rowInd * 3 + squareInd)
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && 
            squares[a] === squares[b] && 
            squares[a] === squares[c]) {
                return squares[a]
        }
    }

    return null;
}

export default Board;
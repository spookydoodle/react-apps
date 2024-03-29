import React, { Component } from 'react';
import Board from './Board';
import BackendButton from './BackendButton';
import './Game.css';


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                location: null
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        // Ignore a click if game is over or if square was already clicked
        if(calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            history: history.concat([{
                squares: squares,
                location: i
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            // history: this.state.history.slice(0, step + 1), // to remove steps after
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const player = move % 2 === 1 ? 'X' : 'O';
            const location = `C${step.location % 3} R${Math.floor(step.location/3)}`;
            const desc = move ? `Go to move # ${move} (P${player} - L(${location}))` : `Go to game start`;
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>
                        {desc}
                    </button>
                </li>
            );
        });

        let status;
        if(winner) {
            status = `Winner: ${winner}`;
        } else {
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
        }

        return (
            <>
            <div className="game">
                <div className="game-board">
                    <Board 
                        current={current.location}
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />

                </div>
                <div className="game-info">
                    <div>{ status }</div>
                    <ol>{ moves }</ol>
                </div>
            </div>
            <div className="footer">
                <BackendButton/>
            </div>
            </>
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


export default Game;

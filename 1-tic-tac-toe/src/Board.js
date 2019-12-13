import React, { Component } from 'react';
import Square from './Square';
import './Board.css';

class Board extends React.Component {

    renderSquare(i) {
        let current = this.props.current === i;

        return <Square
            key={i}
            value={this.props.squares[i]}
            current={current}
            onClick={() => this.props.onClick(i)}
        />;
    }

    render() {

        return (
            <table>
                <tbody>
                    {new Array(3).fill(1).map((row, rowInd) => (
                        <tr key={rowInd} className="board-row">
                            {new Array(3).fill(1).map((square, squareInd) => (
                                <td key={rowInd * 3 + squareInd}>{this.renderSquare(rowInd * 3 + squareInd)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}


export default Board;
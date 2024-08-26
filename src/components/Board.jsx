import { useState } from "react";
import Square from "./Square";

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isNext, setIsNext] = useState(true)

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

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null
    }

    function handleClick(i) {

        if (calculateWinner(squares) || squares[i]) return

        const nextSquares = squares.slice();

        if (isNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }

        setSquares(nextSquares);
        setIsNext(!isNext);
    }

    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (isNext ? 'X' : 'O');
    }

    return (
        <>
            <h1 className="text-2xl font-bold text-center">{status}</h1>
            <div className="space-x-2">
                <Square value={squares[0]} onSquareClick={() => { handleClick(0) }} />
                <Square value={squares[1]} onSquareClick={() => { handleClick(1) }} />
                <Square value={squares[2]} onSquareClick={() => { handleClick(2) }} />
            </div>
            <div className="space-x-2">
                <Square value={squares[3]} onSquareClick={() => { handleClick(3) }} />
                <Square value={squares[4]} onSquareClick={() => { handleClick(4) }} />
                <Square value={squares[5]} onSquareClick={() => { handleClick(5) }} />
            </div>
            <div className="space-x-2">
                <Square value={squares[6]} onSquareClick={() => { handleClick(6) }} />
                <Square value={squares[7]} onSquareClick={() => { handleClick(7) }} />
                <Square value={squares[8]} onSquareClick={() => { handleClick(8) }} />
            </div>
        </>
    )
}

export default Board

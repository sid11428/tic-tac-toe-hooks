import React, { useState } from "react";
import { checkWinner } from "../winner";
import Board from "./Board";

const Game = () => {
const [status, setstatus] = useState([Array(9).fill(null)]);
const [stepNumber, setStepNumber] = useState(0);
const [player, setplayer] = useState(true);
const winner = checkWinner(status[stepNumber]);
const symbol = player ? "X" : "O";

const handleClick = (i) => {
    const statusPoint = status.slice(0, stepNumber + 1);
    const current = statusPoint[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;
    squares[i] = symbol;
    setstatus([...statusPoint, squares]);
    setStepNumber(statusPoint.length);
    setplayer(!player);
};

const jumpTo = (step) => {
    setStepNumber(step);
    setplayer(step % 2 === 0);
};

const reset = () =>
    {
const destination = "Restart";
return (
        
<button onClick={() => jumpTo(0)}>{destination}</button>
        
);
    };

return (
    <>
<h1>Tic Tac Toe </h1>
<Board squares={status[stepNumber]} onClick={handleClick} />
<div className="details">
        <div>
{reset()}
        </div>
        <h2>{winner ? "Winner: " + winner : "Turn: " + symbol}</h2>
</div>
    </>
);
};

export default Game;
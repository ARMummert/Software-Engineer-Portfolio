"use client";
// Path: Frontend/mummertportfolio/src/app/ChessBoard.tsx

import { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from 'react-chessboard';

// React.FC - Function Component - defined props and return types
export default function PlayRandomMoveEngine() { 
    const [game, setGame] = useState(new Chess());
    
    function makeAMove(move: string) {
      const gameCopy: Chess = new Chess(game.fen());
      const result = gameCopy.move(move);
      setGame(gameCopy);
      return result; // null if the move was illegal, the move object if the move was legal
    }
  
    function makeRandomMove() {
      const possibleMoves = game.moves();
      if (game.isGameOver() || game.isDraw() === true || !possibleMoves || possibleMoves.length === 0)
        return; // exit if the game is over or there are no possible moves
      const randomIndex = Math.floor(Math.random() * possibleMoves.length);
      makeAMove(possibleMoves[randomIndex]);
    }

    return (
        <div style={{ width: '400px', height: '400px' }}>
        <Chessboard position={game.fen()}
        id="StyledBoard"
        boardOrientation="black"
        onPieceDrop={ondrop}
        customBoardStyle={{
          borderRadius: "4px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
        }}
        customDarkSquareStyle={{ backgroundColor: "#45B4D6" }}
        customLightSquareStyle={{ backgroundColor: "#327CBD" }}
      />
       <button onClick={makeRandomMove}>Make Random Move</button>
    </div>
    );
}
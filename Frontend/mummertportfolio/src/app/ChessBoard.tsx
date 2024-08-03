"use client";
// Path: Frontend/mummertportfolio/src/app/ChessBoard.tsx

import { useState } from "react";
import { Chess, Square } from "chess.js";
import { Chessboard } from 'react-chessboard';

// React.FC - Function Component - defined props and return types
export default function PlayRandomMoveEngine() { 
    // useState() for game, moveFrom, moveTo, rightClickedSquares, moveSquares, optionSquares
    const [game, setGame] = useState(new Chess());
    const [moveFrom, setMoveFrom] = useState<string | null>(null);
    const [moveTo, setMoveTo] = useState<Square | null>(null);
    const [rightClickedSquares, setRightClickedSquares] = useState<{ [key: string]: { backgroundColor: string } | undefined }>({});
    const [moveSquares, setMoveSquares] = useState({});
    const [optionSquares, setOptionSquares] = useState({});
    const [currentPlayer, setCurrentPlayer] = useState<'Player 1' | 'Player 2'>('Player 1'); 
    const [gameState, setGameState] = useState<'Playing' | 'Checkmate' | 'Draw' | string>('Playing');
    // safeGameMutate() - setGame() with new Chess() object
    // resets or undoes the game state
    function safeGameMutate(modify: (g: Chess) => void) {
      setGame((g) => {
        const update = new Chess(g.fen());
        modify(update);
        return update;
      });
    }
    // Handles the move options for the game
    function getMoveOptions(square: Square | undefined) {
      if (!square) {
            setOptionSquares({});
            return false;
      }
        
      const moves = game.moves({
        square,
        verbose: true,
      });

      if (moves.length === 0) {
        setOptionSquares({});
        return false;
      }

      const newSquares: { [key: string]: { background: string; borderRadius: string } | undefined } = {};
      moves.map((move) => {
        newSquares[move.to] = {
          background:
            game.get(move.to) &&
            game.get(move.to).color !== game.get(square).color
              ? "radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)"
              : "radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)",
          borderRadius: "50%",
        };
        return move;
      });
      newSquares[square] = {
        background: "#775FA8",
        borderRadius: "0%",
      };
      setOptionSquares(newSquares);
      return true;
    }

    // makeRandomMove() - random move for the game (NOT IMPLEMENTED)
    /*function makeRandomMove() {
      const possibleMoves = game.moves();
  
      // exit if the game is over
      if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0)
        return;
  
      const randomIndex = Math.floor(Math.random() * possibleMoves.length);
      safeGameMutate((game) => {
        game.move(possibleMoves[randomIndex]);
      });
    }
    */

    function onSquareClick(square: Square) {
    if (!moveFrom) {
        const hasMoveOptions = getMoveOptions(square);
        if (hasMoveOptions) {
          setMoveFrom(square);
        }
        return;
      }
    if (!moveTo) {
      setMoveTo(square);
      const move = game.move({
        from: moveFrom,
        to: square,
        promotion: 'q',
        
      });

      if (move === null) {
        setMoveFrom(null);
        setMoveTo(null);
        setOptionSquares({});
        return;
      }

      setMoveFrom(null);
      setMoveTo(null);
      setOptionSquares({});
      setCurrentPlayer(currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1'); 
      
    
    if (game.isCheckmate()) {
        setGameState(`${currentPlayer} wins!`);
    } else if (game.isDraw()) {
        setGameState('It\'s a draw!');
    } else {
        // Switch player turn
        setCurrentPlayer(currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1');
    }
    }
    }
    // onSquareRightClick() - right click on square 
    // changes the background color of the square to blue
    function onSquareRightClick(square: Square) {
        const color = "#71C9CF";
        setRightClickedSquares((prevSquares) => {
            const updatedSquares = { ...prevSquares };
            if (updatedSquares[square] && updatedSquares[square].backgroundColor === color) {
                delete updatedSquares[square];
            } else {
                updatedSquares[square] = { backgroundColor: color };
            }
            return updatedSquares;
        });
    }
    return (
      <div style={{ width: '400px', height: '400px' }}>
        <div style={{ textTransform: 'uppercase', justifyContent: 'center', display: 'flex', marginBottom: '10px' }}>Current Turn: {currentPlayer}</div> 
        {gameState && <div style={{ textTransform: 'uppercase', justifyContent: 'center', display: 'flex', marginBottom: '10px' }}>Game Status: {gameState}</div>}
      <Chessboard
          id="ClickToMove"
          animationDuration={200}
          arePiecesDraggable={false}
          position={game.fen()}
          onSquareClick={onSquareClick}
          onSquareRightClick={onSquareRightClick}
          customDarkSquareStyle={{ backgroundColor: "#45B4D6" }}
          customLightSquareStyle={{ backgroundColor: "#327CBD" }}
          customBoardStyle={{
            borderRadius: "4px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
          }}
          customSquareStyles={{
            ...moveSquares,
            ...optionSquares,
            ...rightClickedSquares,
          }}
        />
        <button
          onClick={() => {
            safeGameMutate((game) => {
              game.reset();
            });
            setMoveSquares({});
            setOptionSquares({});
            setRightClickedSquares({});
          }}
        >
          reset
        </button>
        <button
          onClick={() => {
            safeGameMutate((game) => {
              game.undo();
            });
            setMoveSquares({});
            setOptionSquares({});
            setRightClickedSquares({});
          }}
        >
          undo
        </button>
      </div>
    );
  }
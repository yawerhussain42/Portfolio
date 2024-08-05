"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Square = "X" | "O" | null;

interface BoardProps {
  squares: Square[];
  onClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  return (
    <motion.div
      className="grid grid-cols-3 gap-2"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {squares.map((square, index) => (
        <motion.button
          key={index}
          className={`w-20 h-20 flex items-center justify-center text-3xl font-bold border-4 ${
            square === "X" ? "border-blue-400 text-blue-400" : "border-red-400 text-red-400"
          } bg-gray-800 text-white shadow-lg rounded-md`}
          onClick={() => onClick(index)}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05, backgroundColor: square ? "#333" : "#444" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {square}
        </motion.button>
      ))}
    </motion.div>
  );
};

const Page: React.FC = () => {
  const [squares, setSquares] = useState<Square[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    if (xIsNext || gameOver) return;

    // Computer's turn with smarter AI
    const availableMoves = squares.map((square, index) => (square === null ? index : -1)).filter((index) => index !== -1);
    if (availableMoves.length === 0) return;

    const bestMove = findBestMove(squares);
    const newSquares = squares.slice();
    newSquares[bestMove] = "O";
    setSquares(newSquares);
    setXIsNext(true);

    // Check if the game is over
    const winner = calculateWinner(newSquares);
    if (winner || !availableMoves.length) {
      setGameOver(true);
    }
  }, [xIsNext, gameOver, squares]);

  const handleClick = (index: number) => {
    if (squares[index] || gameOver) return;
    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    // Check if the game is over
    const winner = calculateWinner(newSquares);
    if (winner || !newSquares.includes(null)) {
      setGameOver(true);
    }
  };

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <motion.div
      className="flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-md p-4 m-4 rounded-lg shadow-xl">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {status}
        </motion.h1>
        <Board squares={squares} onClick={handleClick} />
        <motion.button
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md"
          onClick={() => {
            setSquares(Array(9).fill(null));
            setXIsNext(true);
            setGameOver(false);
          }}
          whileHover={{ scale: 1.1, backgroundColor: "#3498db" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Restart
        </motion.button>
      </div>
    </motion.div>
  );
};

const calculateWinner = (squares: Square[]): Square => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

// Minimax algorithm for finding the best move
const findBestMove = (squares: Square[]): number => {
  const availableMoves = squares.map((square, index) => (square === null ? index : -1)).filter((index) => index !== -1);

  let bestMove = availableMoves[0];
  let bestScore = -Infinity;

  for (const move of availableMoves) {
    const newSquares = squares.slice();
    newSquares[move] = "O";
    const score = minimax(newSquares, false);
    if (score > bestScore) {
      bestScore = score;
      bestMove = move;
    }
  }

  return bestMove;
};

const minimax = (squares: Square[], isMaximizing: boolean): number => {
  const winner = calculateWinner(squares);
  if (winner === "O") return 10;
  if (winner === "X") return -10;
  if (!squares.includes(null)) return 0;

  const scores = [];
  const availableMoves = squares.map((square, index) => (square === null ? index : -1)).filter((index) => index !== -1);

  for (const move of availableMoves) {
    const newSquares = squares.slice();
    newSquares[move] = isMaximizing ? "O" : "X";
    scores.push(minimax(newSquares, !isMaximizing));
  }

  return isMaximizing ? Math.max(...scores) : Math.min(...scores);
};

export default Page;

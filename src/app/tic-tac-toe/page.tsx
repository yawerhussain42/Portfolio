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
          className={`w-24 h-24 flex items-center justify-center text-4xl font-bold border-4 ${square === "X" ? "border-blue-500 text-blue-500" : "border-red-500 text-red-500"} bg-white shadow-lg rounded-md`}
          onClick={() => onClick(index)}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05, backgroundColor: square ? "#e0e0e0" : "#f0f0f0" }}
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

    // Computer's turn
    const availableMoves = squares.map((square, index) => square === null ? index : -1).filter(index => index !== -1);
    if (availableMoves.length === 0) return;

    // AI makes a move (random strategy)
    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    const newSquares = squares.slice();
    newSquares[randomMove] = "O";
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
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-red-400 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center justify-center h-[80vh] w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
        <motion.h1
          className="text-4xl font-bold mb-4 text-blue-700"
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

export default Page;

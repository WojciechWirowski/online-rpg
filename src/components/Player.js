// Player.js

import React, { useEffect, useState } from 'react';
import './Player.css'; // Import player styles

const Player = ({ rows, columns }) => {
  const [playerPosition, setPlayerPosition] = useState({ row: Math.floor(rows / 2), col: Math.floor(columns / 2) });

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setPlayerPosition((prevPosition) => ({ ...prevPosition, row: Math.max(0, prevPosition.row - 1) }));
          break;
        case 'ArrowDown':
          setPlayerPosition((prevPosition) => ({ ...prevPosition, row: Math.min(rows - 1, prevPosition.row + 1) }));
          break;
        case 'ArrowLeft':
          setPlayerPosition((prevPosition) => ({ ...prevPosition, col: Math.max(0, prevPosition.col - 1) }));
          break;
        case 'ArrowRight':
          setPlayerPosition((prevPosition) => ({ ...prevPosition, col: Math.min(columns - 1, prevPosition.col + 1) }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [rows, columns]);

  return (
    <div className={`player`} style={{ gridRow: playerPosition.row + 1, gridColumn: playerPosition.col + 1 }} />
  );
};

export default Player;

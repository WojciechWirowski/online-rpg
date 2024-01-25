// Player.js

import React, { useEffect } from 'react';
import './Player.css'; // Import player styles

const Player = ({ player, onMove }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          onMove({ ...player.position, x: player.position.x - 1 });
          break;
        case 'ArrowDown':
          onMove({ ...player.position, x: player.position.x + 1 });
          break;
        case 'ArrowLeft':
          onMove({ ...player.position, y: player.position.y - 1 });
          break;
        case 'ArrowRight':
          onMove({ ...player.position, y: player.position.y + 1 });
          break;
        default:
          break;
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyDown);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onMove, player.position]);

  return (
    <div
      className="player"
      style={{ gridRow: player.position.x + 1, gridColumn: player.position.y + 1 }}
    />
  );
};

export default Player;

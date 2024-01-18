import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [player, setPlayer] = useState({
    health: 100,
    attack: 10,
    position: { x: 0, y: 0 },
  });

  const [enemies, setEnemies] = useState([
    { id: 1, health: 20, attack: 8, position: { x: 2, y: 2 } },
    { id: 2, health: 20, attack: 8, position: { x: -3, y: 1 } },
    // Add more enemies as needed
  ]);

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Event listener for keyboard arrow keys
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        handleMove('UP');
        break;
      case 'ArrowDown':
        handleMove('DOWN');
        break;
      case 'ArrowLeft':
        handleMove('LEFT');
        break;
      case 'ArrowRight':
        handleMove('RIGHT');
        break;
      default:
        break;
    }
  };

  const handleMove = (direction) => {
    setPlayer((prevPlayer) => {
      const newPosition = { ...prevPlayer.position };

      const speed = 5;

      switch (direction) {
        case 'UP':
          newPosition.y = Math.max(newPosition.y - speed, 0);
          break;
        case 'DOWN':
          newPosition.y = Math.min(newPosition.y + speed, screenSize.height - 1);
          break;
        case 'LEFT':
          newPosition.x = Math.max(newPosition.x - speed, 0);
          break;
        case 'RIGHT':
          newPosition.x = Math.min(newPosition.x + speed, screenSize.width - 1);
          break;
        default:
          break;
      }

      return {
        ...prevPlayer,
        position: newPosition,
      };
    });
  };

  return (
    <div className="game-container">
      <div>
        <h2>Player Stats</h2>
        <p>Health: {player.health}</p>
        <p>Attack: {player.attack}</p>
      </div>

      <div className="map">
        {enemies.map((enemy) => (
          <div
            key={enemy.id}
            className="enemy"
            style={{ top: `${enemy.position.y * 50}px`, left: `${enemy.position.x * 50}px` }}
          />
        ))}

        <div
          className="player"
          style={{ top: `${player.position.y}px`, left: `${player.position.x}px` }}
        />
      </div>
    </div>
  );
}

export default App;

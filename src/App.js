import React, { useState, useEffect, useRef } from "react";
import './App.css';

function App() {
  const [player, setPlayer] = useState({
    health: 100,
    attack: 10,
    speed: 5,
    position: { x: 0, y: 0 },
  });

  const [enemies, setEnemies] = useState([
    { id: 1, health: 20, attack: 8, position: { x: 2, y: 2 } },
    { id: 2, health: 20, attack: 8, position: { x: -3, y: 1 } },
    // Add more enemies as needed
  ]);

  const [mapSize, setMapSize] = useState({ width: 0, height: 0 });
  const [keysPressed, setKeysPressed] = useState(new Set());

  const mapRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setMapSize({
        width: mapRef.current.clientWidth,
        height: mapRef.current.clientHeight,
      });
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Event listeners for keyboard arrow keys
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keysPressed]);

  useEffect(() => {
    const handleResize = () => {
      setMapSize({
        width: mapRef.current.clientWidth,
        height: mapRef.current.clientHeight,
      });
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleKeyDown = (event) => {
    setKeysPressed((prevKeys) => new Set([...prevKeys, event.key]));
  };

  const handleKeyUp = (event) => {
    setKeysPressed((prevKeys) => {
      const newKeys = new Set(prevKeys);
      newKeys.delete(event.key);
      return newKeys;
    });
  };

  const handleMove = () => {
    setPlayer((prevPlayer) => {
      const newPosition = { ...prevPlayer.position };
      const stepSize = player.speed;

      if (keysPressed.has('ArrowUp')) {
        newPosition.y = Math.max(newPosition.y - stepSize, 0);
      }
      if (keysPressed.has('ArrowDown')) {
        newPosition.y = Math.min(newPosition.y + stepSize, mapSize.height - 50);
      }
      if (keysPressed.has('ArrowLeft')) {
        newPosition.x = Math.max(newPosition.x - stepSize, 0);
      }
      if (keysPressed.has('ArrowRight')) {
        newPosition.x = Math.min(newPosition.x + stepSize, mapSize.width - 50);
      }

      return {
        ...prevPlayer,
        position: newPosition,
      };
    });
  };

  const handleEnemyMove = () => {
    setEnemies((prevEnemies) => {
      return prevEnemies.map((enemy) => {
        const direction = Math.random() < 0.5 ? -1 : 1; // Randomly choose left or right
        const newPosition = { ...enemy.position };
        const stepSize = 5;

        if (Math.random() < 0.5) {
          newPosition.x = Math.max(newPosition.x - direction * stepSize, 0);
        } else {
          newPosition.x = Math.min(newPosition.x + direction * stepSize, mapSize.width - 50);
        }
        if (Math.random() < 0.5) {
          newPosition.y = Math.max(newPosition.x - direction * stepSize, 0);
        } else {
          newPosition.y = Math.min(newPosition.x + direction * stepSize, mapSize.width - 50);
        }
        return {
          ...enemy,
          position: newPosition,
        };
      });
    });
  };

  useEffect(() => {
    const movementInterval = setInterval(() => {
      handleMove();
      handleEnemyMove();
    }, 16); // Adjust the interval as needed

    return () => clearInterval(movementInterval);
  }, [keysPressed]);

  return (
    <div className="game-container">
      <div>
        <h2>Player Stats</h2>
        <p>Health: {player.health}</p>
        <p>Attack: {player.attack}</p>
      </div>

      <div className="map" ref={mapRef}>
        {enemies.map((enemy) => (
          <div
            key={enemy.id}
            className="enemy"
            style={{ top: `${enemy.position.y}px`, left: `${enemy.position.x}px` }}
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

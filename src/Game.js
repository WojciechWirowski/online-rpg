// Game.js

import React, { useState } from 'react';
import CharacterStats from './components/CharacterStats';
import GameArena from './components/GameArena';
import Player from './components/Player';
import './App.css';

const Game = () => {
  const [selectedMap, setSelectedMap] = useState('Map1'); // Default map

  const [player, setPlayer] = useState({
    health: 100,
    position: { x: 20, y: 20 },
  });

  const handleMapChange = (map) => {
    setSelectedMap(map);
  };

  const handlePlayerMove = (newPosition) => {
    // Update the player's position in the state
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      position: newPosition,
    }));
  };

  return (
    <div className="gameContainer">
      <CharacterStats selectedMap={selectedMap} player={player} onMapChange={handleMapChange} />
      <GameArena selectedMap={selectedMap} player={player} onMove={handlePlayerMove}/>
      <Player player={player} onMove={handlePlayerMove} />
    </div>
  );
};

export default Game;

import React from "react";

const CharacterStats = ({ selectedMap, player, onMapChange }) => {
  const maps = ['Map1', 'Map2', 'Map3'];

  return (
    <div className="characterStats">
      <p>Position: {player.position.x + " x " +  player.position.y}</p>
      <p>Health: {player.health}</p>

      <label>Select Map:</label>
      <select value={selectedMap} onChange={(e) => onMapChange(e.target.value)}>
        {maps.map((map) => (
          <option key={map} value={map}>
            {map}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CharacterStats;

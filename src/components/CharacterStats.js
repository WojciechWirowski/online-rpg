import React from "react";

const CharacterStats = ({selectedMap, onMapChange}) => {
    const characterStats = {
        name: 'Player name',
        level: 1,
        health: 15,
    }

    const maps = ['Map1', 'Map2', 'Map3'];

    return (
        <div className="characterStats">
            <h2>{characterStats.name}</h2>
            <p>Level: {characterStats.level}</p>
            <p>Health: {characterStats.health}</p>

            <label>Select Map:</label>
            <select value={selectedMap} onChange={(e) => onMapChange(e.target.value)}>
            {maps.map((map) =>(
                <option key={map} value={map}>
                    {map}
                </option>
            ))}
            </select>
        </div>
    )
}

export default CharacterStats;
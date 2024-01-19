import React from "react";

const CharacterStats = () => {
    const characterStats = {
        name: 'Player name',
        level: 1,
        health: 15,
    }

    return (
        <div className="characterStats">
            <h2>{characterStats.name}</h2>
            <p>Level: {characterStats.level}</p>
            <p>Health: {characterStats.health}</p>
        </div>
    )
}

export default CharacterStats;
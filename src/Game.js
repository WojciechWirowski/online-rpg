import React from "react";
import CharacterStats from './components/CharacterStats';
import GameArena from './components/GameArena';
import './App.css';

const Game = () => {
    return (
        <div className="gameContainer">
            <CharacterStats />
            <GameArena />
        </div>
    )
}

export default Game;
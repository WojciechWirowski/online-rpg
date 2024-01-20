import React, {useState} from "react";
import CharacterStats from './components/CharacterStats';
import GameArena from './components/GameArena';
import Grid from './components/Grid';
import './App.css';

const Game = () => {

    const [selectedMap, setSelectedMap] = useState('Map1'); //Default map

    const handleMapChange = (map) => {
        setSelectedMap(map)
    }

    return (
        <div className="gameContainer">
            <CharacterStats selectedMap={selectedMap} onMapChange={handleMapChange} />
            <GameArena selectedMap={selectedMap}/>
        </div>
    )
}

export default Game;
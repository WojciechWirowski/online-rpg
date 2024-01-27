import React from "react";
import Grid from "./Grid";

const GameArena = ({selectedMap, player, onMove}) => {

    const renderMap = () => {
        switch (selectedMap) {
            case 'Map1':
                return <div className="map-content map1">
                    <Grid rows={40} columns={40} cellSize={20} player={player} onMove={onMove} selectedMap={selectedMap}/>
                </div>
            case 'Map2':
                return <div className="map-content map2">
                    <Grid rows={40} columns={40} cellSize={20} player={player} onMove={onMove} selectedMap={selectedMap}/>
                </div>
            case 'Map3':
                return <div className="map-content map3">
                    <Grid rows={40} columns={40} cellSize={20} player={player} onMove={onMove} selectedMap={selectedMap}/>
                </div>
            default:
                return null;
            
        }
    }

    return (
        <div className="gameArena">
            {renderMap()}
        </div>
    )
}

export default GameArena;
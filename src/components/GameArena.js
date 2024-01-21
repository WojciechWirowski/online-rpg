import React from "react";
import Grid from "./Grid";

const GameArena = ({selectedMap}) => {

    const renderMap = () => {
        switch (selectedMap) {
            case 'Map1':
                return <div className="map-content map1">
                    <Grid rows={40} columns={40} cellSize={20} placedObjects={[1, 5, 15]}/>
                </div>
            case 'Map2':
                return <div className="map-content map2">
                    <Grid rows={40} columns={40} cellSize={20} placedObjects={[5, 5, 15]}/>
                </div>
            case 'Map3':
                return <div className="map-content map3">
                    <Grid rows={40} columns={40} cellSize={20} placedObjects={[8, 2, 15]}/>
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
import React from "react";

const GameArena = ({selectedMap}) => {

    const renderMap = () => {
        switch (selectedMap) {
            case 'Map1':
                return <div className="map-content map1">Map1</div>
            case 'Map2':
                return <div className="map-content map2">Map2</div>
            case 'Map3':
                return <div className="map-content map3">Map3</div>
        }
    }

    return (
        <div className="gameArena">
            {renderMap()}
        </div>
    )
}

export default GameArena;
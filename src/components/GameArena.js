import React from "react";

const GameArena = ({selectedMap}) => {

    const renderMap = () => {
        switch (selectedMap) {
            case 'Map1':
                return <div>Map1</div>
            case 'Map2':
                return <div>Map2</div>
            case 'Map2':
                return <div>Map3</div>
        }
    }

    return (
        <div className="gameArena">
            <h2>{selectedMap}</h2>
            {renderMap}
        </div>
    )
}

export default GameArena;
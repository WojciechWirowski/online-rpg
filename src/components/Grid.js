import React, { useEffect, useState } from 'react';
import '../App.css';
import Player from './Player';
import {MapElements, MapConfigurations} from './Map'; // Import your map configurations

const Grid = ({ rows, columns, placedObjects, player, onMove, selectedMap }) => {
  const [cellSize, setCellSize] = useState(0);

  useEffect(() => {
    const screenHeight = window.innerHeight;
    const calculatedCellSize = Math.floor(screenHeight / rows);
    setCellSize(calculatedCellSize);

    const handleResize = () => {
      const newScreenHeight = window.innerHeight;
      const newCellSize = Math.floor(newScreenHeight / rows);
      setCellSize(newCellSize);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [rows]);

  // Check if map configuration exists for the selected map
  const mapConfiguration = MapConfigurations[selectedMap];
  if (!mapConfiguration) {
    console.error(`Map configuration not found for ${selectedMap}`);
    return null; // or handle it in an appropriate way
  }

  const gridStyle = {
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    gridTemplateColumns: `repeat(${columns}, ${cellSize}px)`,
  };

  return (
    <div className='grid' style={gridStyle}>
      {Array.from({ length: rows * columns }, (_, index) => {
        // Additional checks for index validity
        if (index < 0 || index >= mapConfiguration.length * mapConfiguration[0].length) {
          console.error(`Invalid index: ${index}`);
          return null; // or handle it in an appropriate way
        }

        const row = Math.floor(index / columns);
        const col = index % columns;

        if (!mapConfiguration[row] || !mapConfiguration[row][col]) {
          console.error(`Invalid row or column indices for index ${index}`);
          return null; // or handle it in an appropriate way
        }

        const element = mapConfiguration[row][col];

        return (
          <div
            key={index}
            className={`grid-cell ${placedObjects && placedObjects.includes(index) ? 'occupied' : ''} ${element}`}
          />
        );
      })}
      <Player player={player} onMove={onMove} />
    </div>
  );
};


const MemorizedGrid = React.memo(Grid);

export default MemorizedGrid;

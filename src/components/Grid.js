
import React, { useEffect, useState } from 'react';
import '../App.css';
import Player from './Player';

const Grid = ({ rows, columns, placedObjects, player, onMove}) => {
  const [cellSize, setCellSize] = useState(0);

  useEffect(() => {
    // Calculate the cell size to fill the screen height
    const screenHeight = window.innerHeight;
    const calculatedCellSize = Math.floor(screenHeight / rows);

    // Update the state with the calculated cell size
    setCellSize(calculatedCellSize);

    // Event listener for window resize to recalculate cell size
    const handleResize = () => {
      const newScreenHeight = window.innerHeight;
      const newCellSize = Math.floor(newScreenHeight / rows);
      setCellSize(newCellSize);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [rows]);

  const gridStyle = {
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    gridTemplateColumns: `repeat(${columns}, ${cellSize}px)`,
  };

  return (
    <div className='grid' style={gridStyle}>
      {Array.from({ length: rows * columns }, (_, index) => (
        <div
          key={index}
          className={`grid-cell ${placedObjects.includes(index) ? 'occupied' : ''}`}
        />
      ))}
      <Player player={player} onMove={onMove}/>
    </div>
  );
};

export default Grid;

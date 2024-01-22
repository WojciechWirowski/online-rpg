// Grid.js

import React, { useEffect, useState } from 'react';
import './Player.css'; // Import player styles
import Player from './Player'; // Import the Player component
import '../App.css'; // Import your main styles

const Grid = ({ rows, columns, placedObjects }) => {
  const [cellSize, setCellSize] = useState(0);

  useEffect(() => {
    const screenHeight = window.innerHeight;
    const calculatedCellSize = Math.floor(screenHeight / rows);
    setCellSize(calculatedCellSize);

    const handleResize = () => {
      const newScreenHeight = window.innerHeight;
      const newCellSize = Math.floor(newScreenHeight / rows);
      setCellSize(newCellSize);
      console.log(newCellSize)
    };

    window.addEventListener('resize', handleResize);

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
      {/* Apply player class conditionally based on player's position */}
      {Array.from({ length: rows * columns }, (_, index) => (
        <div key={index} className={`grid-cell ${placedObjects.includes(index) ? 'occupied' : ''}`} />
      ))}
      
      {/* Render the Player component */}
      <Player rows={rows} columns={columns} />
    </div>
  );
};

export default Grid;

// Grid.js

import React from 'react';
import '../App.css';

const Grid = ({ rows, columns, cellSize, placedObjects }) => {
  const gridStyle = {
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    gridTemplateColumns: `repeat(${columns}, ${cellSize}px)`,
  };

  return (
    <div className='grid' style={gridStyle}>
      {Array.from({ length: rows * columns }, (_, index) => (
        <div key={index} className={`grid-cell ${placedObjects.includes(index) ? 'occupied' : ''}`} />
      ))}
    </div>
  );
};

export default Grid;

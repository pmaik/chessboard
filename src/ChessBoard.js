import React, { useState, useMemo } from "react";


const ChessBoard = () => {
  const [gridSize, setGridSize] = useState(8);

  const handleGridSizeChange = (e) => {
    setGridSize(e.target.value);
  };

  const board = useMemo(() => {
    const rows = [];
    for (let row = 0; row < gridSize; row++) {
      const cells = [];
      for (let col = 0; col < gridSize; col++) {
        const isBlack = (row + col) % 2 === 1;
        cells.push(
          <div
            key={`${row}-${col}`}
            className={`${isBlack ? "black-box" : "gray-box"} board-cell`}
          />
        );
      }

      rows.push(
        <div key={row} className="board-row">
          {cells}
        </div>
      );
    }
    return <div className="board">{rows}</div>;
  }, [gridSize]);

  return (
    <div className="chessboard-wrapper">
      <h1 className="heading">Chessboard</h1>
      <div className="input-wrapper">
        <p>Type grid size:</p>
        <input
          className="input"
          type="number"
          min="2"
          max="10"
          value={gridSize}
          onChange={handleGridSizeChange}
        />
      </div>

      <div className="chessboard-display">{board}</div>
    </div>
  );
};

export default ChessBoard;

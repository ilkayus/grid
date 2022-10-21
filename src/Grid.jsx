import React, { useState, useEffect } from "react";
import anime from "animejs";
import randomColor from "randomcolor";

const getGridSize = () => {
  const columns = Math.floor(window.innerWidth / 25);
  const rows = Math.floor(window.innerHeight / 25);
  anime({
    targets: ".grid-item",
    backgroundColor: "#fff",
    duration: 0,
    easing: "linear",
  });
  return { columns, rows, total: columns * rows };
};

const Grid = () => {
  const [grid, setGrid] = useState({ columns: 0, rows: 0, total: 0 });
  useEffect(() => {
    // const interval = setInterval(() => {
    let obj = getGridSize();
    setGrid(obj);
    // }, 3000);
    return () => {
      //   clearInterval(interval);
    };
  }, []);

  const handleStagger = (i) => {
    const { columns, rows } = grid;
    const el = i.target.id;
    anime({
      targets: ".grid-item",
      backgroundColor: randomColor(),
      delay: anime.stagger(50, { grid: [columns, rows], from: el }),
    });
  };

  return (
    <div id="grid">
      {[...Array(grid.total)].map((x, i) => (
        <div className="grid-item" id={i} onClick={(i) => handleStagger(i)} />
      ))}
    </div>
  );
};

export default Grid;

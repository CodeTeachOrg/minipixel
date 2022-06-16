import styles from '../styles/components/Draw.module.css';

import { useEffect, useRef } from 'react';

let canvas, ctx;

export default function Draw() {
  const canvasRef = useRef();

  function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  }

  function draw() {
    // draw background
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, panelPixels, panelPixels);
    // draw tiles
    for (let x = 0; x < panelTiles; x++) {
      for (let y = 0; y < panelTiles; y++) {
        const tileIndex = y * panelTiles + x;
        ctx.fillStyle = tiles[tileIndex] ? '#000' : '#fff';
        ctx.fillRect(
          x * tilePixels, y * tilePixels,
          tilePixels, tilePixels
        );
      }
    }
    // draw arrow background
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, tilePixels / 2, tilePixels / 2);
  }

  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
    draw();
  }, []);

  useEffect(() => {
    draw();
  }, [tiles]);

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        width="200px"
        height="200px"
      />
    </div>
  );
}

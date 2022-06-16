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
    // draw back arrow
    ctx.fillStyle = '#000';
    ctx.fillRect(mpx * 2, mpx * 3.5, mpx * 4, mpx);
    ctx.fillRect(mpx * 3, mpx * 2.5, mpx, mpx);
    ctx.fillRect(mpx * 3, mpx * 4.5, mpx, mpx);
    ctx.fillRect(mpx * 2.5, mpx * 3, mpx, mpx);
    ctx.fillRect(mpx * 2.5, mpx * 4, mpx, mpx);
    ctx.fillRect(mpx * 3.5, mpx * 2, mpx * 0.5, mpx);
    ctx.fillRect(mpx * 3.5, mpx * 5, mpx * 0.5, mpx);
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

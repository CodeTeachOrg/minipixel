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

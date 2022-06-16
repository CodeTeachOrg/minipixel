import styles from '../styles/components/Display.module.css';

import { useEffect, useRef } from 'react';
import { panelPixels } from '../util/dimensions';

let canvas, ctx;

export default function Display() {
  const canvasRef = useRef();

  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
  }, []);

  return (
    <div
      className={styles.container}
      style={{ width: panelPixels, height: panelPixels }}
    >
      <canvas
        ref={canvasRef}
        width={panelPixels}
        height={panelPixels}
      />
    </div>
  );
}

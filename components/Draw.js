import styles from '../styles/components/Draw.module.css';

export default function Draw() {
  const canvasRef = useRef();

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

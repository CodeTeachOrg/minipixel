import styles from '../styles/components/Display.module.css';

export default function Display() {
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

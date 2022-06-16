import dynamic from 'next/dynamic';
import { panelPixels } from '../util/dimensions';

import styles from '../styles/components/Code.module.css';

const CodeEditor = dynamic(import('./CodeEditor'), {
  loading: function Load() { return <p>Loading...</p> }, ssr: false
});

export default function Code(props) {
  return (
    <div
      className={styles.container}
      style={{ width: panelPixels * 2 + 4, height: panelPixels }}
    >
      <CodeEditor {...props} />
    </div>
  );
}

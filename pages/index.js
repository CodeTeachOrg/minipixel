import Code from '../components/Code';
import Draw from '../components/Draw';
import Display from '../components/Display';

import styles from '../styles/pages/Index.module.css';

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <Code />
        <div>
          <Draw />
          <Display />
        </div>
      </div>
    </div>
  );
}

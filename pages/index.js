import Code from '../components/Code';
import Draw from '../components/Draw';
import Display from '../components/Display';

import { useState } from 'react';
import { defaultCode } from '../util/defaults';

import styles from '../styles/pages/Index.module.css';

export default function Index() {
  const [code, setCode] = useState(defaultCode);

  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <Code
          value={code}
          onChange={val => setCode(val)}
        />
        <div>
          <Draw />
          <Display />
        </div>
      </div>
    </div>
  );
}

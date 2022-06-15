import AceEditor from 'react-ace';

import { useState } from 'react';

import 'ace-builds/src-noconflict/mode-javascript.js';
import 'ace-builds/src-noconflict/theme-github.js';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-searchbox';

import styles from '../styles/components/CodeEditor.module.css';

export default function CodeEditor(props) {

  return (
    <div className={styles.container}>
      <AceEditor
        mode="javascript"
        theme="github"
        wrapEnabled={true}
        showPrintMargin={false}
        tabSize={2}
        setOptions={{
          useWorker: false,
          enableLiveAutocompletion: true
        }}
        width="400px"
        height="200px"
        {...props}
      />
    </div>
  );
}

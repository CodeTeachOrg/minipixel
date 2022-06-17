import AceEditor from 'react-ace';

import { panelPixels } from '../util/dimensions';

import 'ace-builds/src-noconflict/mode-javascript.js';
import 'ace-builds/src-noconflict/theme-github.js';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-searchbox';

import styles from '../styles/components/CodeEditor.module.css';

const maxChars = 256;

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
        width={`${panelPixels * 2 + 4}px`}
        height={`${panelPixels}px`}
        {...props}
      />
      <span
        className={styles.chars}
        style={{ color: props.value.length > maxChars ? 'red' : '#000' }}
      >
        {props.value.length}/{maxChars}
      </span>
    </div>
  );
}

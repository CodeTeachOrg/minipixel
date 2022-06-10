import dynamic from 'next/dynamic';

const CodeEditor = dynamic(import('./CodeEditor'), {
  loading: function Load() { return <p>Loading...</p> }, ssr: false
});

export default function Code(props) {
  return <CodeEditor {...props} />;
}

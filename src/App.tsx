import React, {useState} from 'react';
import styles from './App.module.css';
import classNames from 'classnames';

interface TogglerProps {
  label: string;
  children: React.ReactNode;
}

function Toggler(props: TogglerProps) {
  const [shown, setShown] = useState<boolean>(false);
  return (
    <div className={styles.toggleWrapper}>
      <h2
        onClick={() => {
          setShown(!shown);
        }}>
        {props.label}
      </h2>
      {shown ? props.children : null}
    </div>
  );
}

function Example() {
  return (
    <div className={classNames(styles.container, styles.padding)}>
      <Toggler label="Label Text">
        <div className={styles.content}>Hello, I am some content</div>
      </Toggler>
      <Toggler label="Label Text 2">
        <div className={styles.content}>Some other content</div>
      </Toggler>
    </div>
  );
}

function App() {
  return <Example />;
}

export default App;

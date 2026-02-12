import './App.css';
import View from './components/View';
import Buttons from './components/Buttons';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <>
      <h1>Simple Counter</h1>
      <View count={count} />
      <Buttons onClick={onClickButton} />
    </>
  );
}

export default App;

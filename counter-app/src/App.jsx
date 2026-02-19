import './App.css';
import View from './components/View';
import Buttons from './components/Buttons';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count: ${count}`);
  }, [count]); // 의존성 배열 (deps, dependency array)

  const onClickButton = (value) => {
    setCount((prev) => prev + value);
    // console.log(count); // 변경되기 이전의 count 값이 출력됨 (setCount가 비동기이기 때문)
  };

  return (
    <div className="wrapper">
      <h1>Simple Counter</h1>
      <View count={count} />
      <Buttons onClickButton={onClickButton} />
    </div>
  );
}

export default App;

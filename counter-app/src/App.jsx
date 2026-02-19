import './App.css';
import View from './components/View';
import Buttons from './components/Buttons';
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const isMount = useRef(false);

  // 1. 마운트: 탄생
  useEffect(() => {
    console.log('마운트');
  }, []);

  // 2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log('업데이트');
  });

  // 3. 언마운드: 죽음 (Even 컴포넌트 참고)

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
      {count % 2 === 0 ? <Even /> : null}

      <Buttons onClickButton={onClickButton} />
    </div>
  );
}

export default App;

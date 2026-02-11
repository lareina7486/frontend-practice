import { useState } from 'react';
import './View.css';

const View = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="wrapper">
      <h3>현재 카운트: </h3>
      <h1>{count}</h1>
    </div>
  );
};

export default View;

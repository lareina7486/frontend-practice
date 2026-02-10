// JSX 문법 연습

const Main = () => {
  const name = 'esther';
  const point = 30;
  const number = 19;

  return (
    <>
      <h1>Main</h1>
      <h2>안녕하세요 {name}님!</h2>
      <h3>현재 포인트는 {point + 5}점 입니다.</h3>
      <h3>
        {name}님의 순서는 {number}({number % 2 == 0 ? '짝수' : '홀수'})번째
        입니다.
      </h3>
    </>
  );
};

export default Main;

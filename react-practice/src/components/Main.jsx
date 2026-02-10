// JSX 문법 주의사항
// 1. 중괄호 내부에는 자바스크립트 '표현식'만 가능.
// 2. 숫자, 문자열, 배열 값만 렌더링 됨.
// 객체는 {obj} 불가능, {obj.a} 가능!
// 3. 모든 태그는 닫혀있어야 함.
// 4. 최상위 태그는 반드시 1개 (fragment 사용 가능)
// 5. CSS는 카멜케이스, className 사용

import './Main.css';

const Main = () => {
  const name = 'esther';
  const point = 30;
  const number = 19;
  const isLogin = true;

  return (
    <>
      <h1>Main</h1>
      <h2>안녕하세요 {name}님!</h2>
      <h3 className="point">현재 포인트는 {point + 5}점 입니다.</h3>
      <h3>
        {name}님의 순서는 {number}({number % 2 == 0 ? '짝수' : '홀수'})번째
        입니다.
      </h3>
      <h3>{isLogin ? <div>로그아웃</div> : <div>로그인</div>}</h3>
    </>
  );
};

export default Main;

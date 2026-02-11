// 이름, 생년월일, 국적, 자기소개
import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('이름');
  const [birth, setBirth] = useState('');
  const [country, setCountry] = useState('');
  const [introduction, setIntroduction] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeIntroduction = (e) => {
    setIntroduction(e.target.value);
  };

  return (
    <>
      <h1>회원가입</h1>

      <div>
        <label htmlFor="name">이름 </label>
        <input
          value={name}
          onChange={onChangeName}
          id="name"
          placeholder="이름을 입력해주세요"
        />
      </div>

      <div>
        <label htmlFor="birth">생년월일 </label>
        <input type="date" value={birth} onChange={onChangeBirth} id="birth" />
      </div>

      <div>
        <label htmlFor="country">국적 </label>
        <select value={country} onChange={onChangeCountry} id="country">
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="cn">중국</option>
          <option value="jp">일본</option>
          <option value="vn">베트남</option>
        </select>
      </div>

      <div>
        <label htmlFor="introduction">소개 </label>
      </div>

      <div>
        <textarea
          value={introduction}
          onChange={onChangeIntroduction}
          id="introduction"
        />
      </div>
    </>
  );
};

export default Register;

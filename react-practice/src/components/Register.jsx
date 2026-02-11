import useInput from '../hooks/useInput';

const Register = () => {
  const { input, refObj, onChange, onSubmit } = useInput();

  return (
    <>
      <h1>회원가입</h1>

      <div>
        <label htmlFor="name">이름 </label>
        <input
          ref={refObj}
          value={input.name}
          onChange={onChange}
          id="name"
          placeholder="이름을 입력해주세요"
        />
      </div>

      <div>
        <label htmlFor="birth">생년월일 </label>
        <input type="date" value={input.birth} onChange={onChange} id="birth" />
      </div>

      <div>
        <label htmlFor="country">국적 </label>
        <select value={input.country} onChange={onChange} id="country">
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="cn">중국</option>
          <option value="jp">일본</option>
          <option value="vn">베트남</option>
        </select>
      </div>

      <div>
        <label htmlFor="bio">소개 </label>
      </div>

      <div>
        <textarea value={input.bio} onChange={onChange} id="bko" />
      </div>

      <button onClick={onSubmit}>제출</button>
    </>
  );
};

export default Register;

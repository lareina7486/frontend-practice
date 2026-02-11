const Button = ({ children, text, color = 'black' }) => {
  const onClickButton = () => {
    console.log(text);
    // console.log(e);
  }

  return (
    <button onClick={onClickButton} style={{ color }}>
      {text}
      {children}
    </button>
  );
};

export default Button;



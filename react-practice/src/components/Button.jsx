const Button = ({ children, text, color = 'black' }) => {
  return (
    <button style={{ color }}>
      {text}
      {children}
    </button>
  );
};

export default Button;

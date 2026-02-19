import './Buttons.css';

const Buttons = ({ onClickButton }) => {
  const values = [-100, -10, -1, 1, 10, 100];
  return (
    <div className="wrapper">
      {values.map((value) => (
        <button key={value} onClick={() => onClickButton(value)}>
          {value}
        </button>
      ))}
    </div>
  );
};

export default Buttons;

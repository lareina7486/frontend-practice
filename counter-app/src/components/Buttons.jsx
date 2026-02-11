import './Buttons.css'

const Buttons = () => {
  const onClick = () => {
    
  }

  return (
    <div className='wrapper'>
      <button onClick={onClick}>-1</button>
      <button onClick={onClick}>-10</button>
      <button onClick={onClick}>-100</button>
      <button onClick={onClick}>+100</button>
      <button onClick={onClick}>+10</button>
      <button onClick={onClick}>+1</button>
    </div>
  );
};

export default Buttons;

import { useState } from 'react';

const Bulb = ({ light }) => {
  return light === 'OFF' ? (
    <h1 style={{ backgroundColor: 'gray' }}>OFF</h1>
  ) : (
    <h1 style={{ backgroundColor: 'orange' }}>ON</h1>
  );
};

const Footer = () => {
  const [state, setState] = useState(0);
  const [light, setLight] = useState('OFF');

  return (
    <>
      <div>
        <Bulb light={light} />
        <button
          onClick={() => {
            setLight(light == 'OFF' ? 'ON' : 'OFF');
          }}
        >
          전구 {light == 'OFF' ? '켜기' : '끄기'}
        </button>
      </div>
      <div>
        <h1>{state}</h1>
        <button
          onClick={() => {
            setState(state + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Footer;

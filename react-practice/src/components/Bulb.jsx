import { useState } from 'react';

const Bulb = () => {
  const [light, setLight] = useState('OFF');

  return (
    <div>
      {light === 'OFF' ? (
        <h1 style={{ backgroundColor: 'gray' }}>OFF</h1>
      ) : (
        <h1 style={{ backgroundColor: 'orange' }}>ON</h1>
      )}

      <button
        onClick={() => {
          setLight(light === 'OFF' ? 'ON' : 'OFF');
        }}
      >
        전구 {light === 'OFF' ? '켜기' : '끄기'}
      </button>
    </div>
  );
};

export default Bulb;
import { useState, useRef } from 'react';

const useInput = () => {
  // const [name, setName] = useState('이름');
  // const [birth, setBirth] = useState('');
  // const [country, setCountry] = useState('');
  // const [bio, setBio] = useState('');

  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });

  const refObj = useRef();

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === '') {
      refObj.current.focus();
    }
  };

  return { input, refObj, onChange, onSubmit };
};

export default useInput;

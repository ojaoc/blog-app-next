import React from 'react';

type InputProps = {
  name: string;
  value: string;
  onChange: () => void;
};

const Input = (props: InputProps) => {
  return <input {...props}></input>;
};

export default Input;

import React, { useState, useRef } from 'react';
import clsx from 'clsx';

type InputProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: () => void;
};

const Input = (props: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleIsFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    if (props.value) return;
    setIsFocus(false);
  };

  return (
    <div className="relative">
      <label
        className={clsx(
          'absolute transition duration-200 ease-in-out text-base ml-2 mt-2 px-2 cursor-text',
          isFocus && 'transform -translate-y-5 scale-75'
        )}
        onClick={focusInput}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        {...props}
        id={props.id}
        ref={inputRef}
        onFocus={handleIsFocus}
        onBlur={handleBlur}
        className="border border-gray-300 hover:border-gray-400 rounded p-2 text-base"
      />
    </div>
  );
};

export default Input;

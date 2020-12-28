import React, { useState } from 'react';
import clsx from 'clsx';

type InputProps = {
  id: string;
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  rows?: number | string;
  ref?: IntrinsicAttributes & InputProps;
  onChange?: () => void;
};

const Input = (props: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleIsFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = (e) => {
    if (e.target.value) return;
    setIsFocus(false);
  };

  return (
    <div className="relative w-full">
      <label
        className={clsx(
          'absolute transition duration-200 ease-in-out text-base ml-2 mt-2 px-2 cursor-text bg-white',
          isFocus && 'transform -translate-y-5 scale-75'
        )}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      {props.rows > 0 ? (
        <textarea
          {...props}
          autoComplete="off"
          id={props.id}
          onFocus={handleIsFocus}
          onBlur={handleBlur}
          className="border border-gray-300 hover:border-gray-400 rounded p-2 text-base resize-none w-full"
        />
      ) : (
        <input
          {...props}
          autoComplete="off"
          id={props.id}
          onFocus={handleIsFocus}
          onBlur={handleBlur}
          className="border border-gray-300 hover:border-gray-400 rounded p-2 text-base w-full"
        />
      )}
    </div>
  );
};

export default Input;

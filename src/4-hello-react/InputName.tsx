import React from 'react';

export default function InputName({ value, onChange }) {
  return (
    <input
      type="text"
      autoComplete="off"
      value={value}
      onChange={onChange}
      onKeyUp={onChange}
    />
  );
}

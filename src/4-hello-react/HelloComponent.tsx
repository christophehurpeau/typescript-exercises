import React, { useState } from 'react';
import InputName from './InputName';

export default function HelloComponent() {
  const [name, setName] = useState('World');
  return (
    <div>
      <span>Hello {name}!</span>
      <InputName value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

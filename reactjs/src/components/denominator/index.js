import React, { useState } from 'react';
import './style.css';
import { setDenominator } from '../../utils/denominator';

const Denominator = ({ value }) => {
  const [checked, setChecked] = useState(false);
  const checkHandler = () => {
    setChecked(!checked);
  };
  return (
    <div className='denominator'>
      <label>
        <input type='checkbox' checked={checked} onChange={checkHandler} />
        Show Denominator
      </label>
      <p
        style={
          checked
            ? { marginBottom: '0px', marginTop: '0px' }
            : { display: 'none' }
        }
      >
        {setDenominator(value)}
      </p>
    </div>
  );
};

export default Denominator;

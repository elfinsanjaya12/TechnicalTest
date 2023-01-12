import React, { useState } from 'react';
import './style.css';
import { setDenominator } from '../../utils/denominator';
import { Form } from 'react-bootstrap';

const Denominator = ({ value }) => {
  const [checked, setChecked] = useState(false);
  const checkHandler = () => {
    setChecked(!checked);
  };
  return (
    <div className='denominator'>
      <Form.Check
        label='Show Denominator'
        type='checkbox'
        checked={checked}
        onChange={checkHandler}
      />

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

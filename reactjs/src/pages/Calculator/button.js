import React from 'react';
import './style.css';

const Buttons = ({
  inputHandler,
  clearInput,
  backspace,
  changePlusMinus,
  calculateAns,
}) => {
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('equalbtn').click();
    }
  });

  // todo mapping menggunakan array
  return (
    <div className='show-btn'>
      <button className='btn-custom clr' onClick={clearInput}>
        AC
      </button>
      <button className='btn-custom clr' onClick={backspace}>
        ⌫
      </button>
      <button className='btn-custom exp' onClick={inputHandler}>
        log
      </button>
      <button className='btn-custom exp' onClick={inputHandler}>
        ÷
      </button>
      <button className='btn-custom exp' onClick={inputHandler}>
        %
      </button>
      <button className='btn-custom' onClick={inputHandler}>
        7
      </button>
      <button className='btn-custom' onClick={inputHandler}>
        8
      </button>
      <button className='btn-custom' onClick={inputHandler}>
        9
      </button>
      <button className='btn-custom exp' onClick={inputHandler}>
        x
      </button>
      <button className='btn-custom exp' onClick={inputHandler}>
        x<sup>3</sup>
      </button>
      <button className='btn-custom' onClick={inputHandler}>
        4
      </button>
      <button className='btn-custom' onClick={inputHandler}>
        5
      </button>
      <button className='btn-custom' onClick={inputHandler}>
        6
      </button>
      <button className='btn-custom exp' onClick={inputHandler}>
        -
      </button>
      <button className='btn-custom exp' onClick={inputHandler}>
        <sup>3</sup>√
      </button>
      <button className='btn-custom' onClick={inputHandler}>
        1
      </button>
      <button className='btn-custom' onClick={inputHandler}>
        2
      </button>
      <button className='btn-custom' onClick={inputHandler}>
        3
      </button>
      <button className='btn-custom exp' onClick={inputHandler}>
        +
      </button>
      <button className='btn-custom exp' onClick={inputHandler}>
        !
      </button>
      <button className='btn-custom exp' onClick={changePlusMinus}>
        ±
      </button>
      <button className='btn-custom' onClick={inputHandler}>
        0
      </button>
      <button className='btn-custom exp' onClick={inputHandler}>
        .
      </button>
      <button
        className='btn-custom exp equal'
        id='equalbtn'
        onClick={calculateAns}
      >
        =
      </button>
    </div>
  );
};

export default Buttons;

import { Route, Routes } from 'react-router-dom';

import Calculator from '../pages/Calculator';

export function CalculatorRoute() {
  return (
    <Routes>
      <Route path='/' element={<Calculator />} />
    </Routes>
  );
}

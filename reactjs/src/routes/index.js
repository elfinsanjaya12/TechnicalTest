import { Navigate, Route, Routes } from 'react-router-dom';
import GuardRoute from '../components/GuardRoute';
import GuestOnlyRoute from '../components/GuestOnlyRoute';

import Login from '../pages/Signin';
import { CalculatorRoute } from './CalculatorRoute';

import SNavbar from '../components/Navbar';

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path='signin'
        element={
          <GuestOnlyRoute>
            <Login />
          </GuestOnlyRoute>
        }
      />
      <Route
        path='/'
        element={
          <>
            <SNavbar />
            <GuardRoute />
          </>
        }
      >
        <Route path='calculator/*' element={<CalculatorRoute />} />

        <Route path='' element={<Navigate to='/calculator' replace={true} />} />
      </Route>
    </Routes>
  );
}

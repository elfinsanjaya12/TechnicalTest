import { USER_LOGIN, USER_LOGOUT } from './constants';

export function userLogin(token) {
  return {
    type: USER_LOGIN,
    token,
  };
}

export function userLogout() {
  localStorage.removeItem('auth');
  return {
    type: USER_LOGOUT,
  };
}

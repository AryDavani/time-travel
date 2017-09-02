import $ from 'jquery';
import {
  AUTH_USER,
  URL,
  HEADERS
} from './types';


// Signup and Login functions
export function signup(user) {
  console.log("signup user", user);

  return function(dispatch) {
    fetch(`${URL}/users`, {
      method: "POST",
      body: user,
      headers: HEADERS
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log('result', result);
      dispatch({ type: AUTH_USER });
      localStorage.setItem('user', JSON.stringify(result));
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export function login(user) {
  console.log("login user", user);
  return function(dispatch) {
    fetch(`${URL}/login?${$.param(user)}`, { headers: HEADERS })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('user', JSON.stringify(result));
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

// authUtils.js
const AUTH_KEY = 'authenticated';

export const setAuthenticated = (status: any) => {
  if (status) {
    localStorage.setItem(AUTH_KEY, 'true');
  } else {
    localStorage.removeItem(AUTH_KEY);
  }
};

export const isAuthenticated = () => {
  return localStorage.getItem(AUTH_KEY) === 'true';
};

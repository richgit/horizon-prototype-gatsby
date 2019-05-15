export const isBrowser = () => typeof window !== 'undefined';

export const getUser = () =>
  isBrowser() && window.localStorage.getItem('gatsbyUser') ? JSON.parse(window.localStorage.getItem('gatsbyUser')) : {};

const setUser = user => window.localStorage.setItem('gatsbyUser', JSON.stringify(user));

export const handleLogin = ({ username, password }) => {
  console.log('handle login', username, password);
  if (username === `john` && password === `pass`) {
    console.log('yep');
    return setUser({
      username: `john`,
      name: `Johnny`,
      email: `johnny@example.org`,
    });
  }

  return false;
};

export const isLoggedIn = () => {
  console.log('isLoggedIn');
  const user = getUser();

  console.log('user', user);
  return !!user.username;
};

export const logout = callback => {
  setUser({});
  callback();
};

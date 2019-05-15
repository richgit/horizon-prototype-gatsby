import React from 'react';
import { navigate } from 'gatsby';
import { isLoggedIn } from '../utils/auth';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log('pr - ');
  if (!isLoggedIn()) {
    // If the user is not logged in, redirect to the login page.
    console.log('navigating to login');
    navigate(`/app/login`);
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;

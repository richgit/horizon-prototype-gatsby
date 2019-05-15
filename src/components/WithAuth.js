import React from 'react';
import { navigate } from 'gatsby';
import { isLoggedIn } from '../utils/auth';

const WithAuth = WrappedComponent => {
  class HOC extends React.Component {
    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      if (!isLoggedIn()) {
        navigate(`/app/login`);
        return null;
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return HOC;
};

export default WithAuth;

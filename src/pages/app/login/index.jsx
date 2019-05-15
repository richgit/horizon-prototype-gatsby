import React from 'react';
// import { navigate } from 'gatsby/index';
import { handleLogin, isLoggedIn } from '../../../utils/auth';
import Layout from '../../../components/Layout';

class Index extends React.Component {
  state = {
    username: ``,
    password: ``,
  };

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    handleLogin(this.state);
  };

  render() {
    // if (isLoggedIn()) {
    //   navigate(`/app/profile`);
    // }

    return (
      <Layout>
        <div className="alert alert-warning" role="alert">
          You need to log on to access resticted areas of this site.
        </div>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event);
            // navigate(`/app/profile`);
          }}
        >
          <div className="form-group">
            <label htmlFor="username">
              Userid
              <input
                type="text"
                className="form-control"
                placeholder="Enter Userid"
                id="username"
                name="username"
                onChange={this.handleUpdate}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="password"
                name="password"
                onChange={this.handleUpdate}
                required
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      </Layout>
    );
  }
}

export default Index;

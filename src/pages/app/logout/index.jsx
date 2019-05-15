import React, { Component } from 'react';
import Layout from '../../../components/Layout';

class Index extends Component {
  constructor(props) {
    super(props);
    console.log('login:constructor');

    // this.state = { error: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();

    // const url = this.props.apiUrl
  }

  render() {
    return (
      <Layout>
        <div className="alert alert-warning" role="alert">
          Click button to log out of this portal.
        </div>
        <form className="mx-5" onSubmit={this.handleSubmit}>
          <button type="submit" className="btn btn-primary">
            Logout
          </button>
        </form>
      </Layout>
    );
  }
}

export default Index;

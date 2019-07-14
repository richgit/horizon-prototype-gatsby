import 'react-table/react-table.css';
import * as React from 'react';
import ReactTable from 'react-table';
import Layout from '../../../components/Layout';
import WithAuth from '../../../components/WithAuth';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shows: [],
    };
  }

  // note: this is a simplified example without error handling, authentication, etc.
  async componentDidMount() {
    const shows = await fetch(`https://api.tvmaze.com/search/shows?q=batman`).then(response => response.json());

    this.setState({
      shows,
    });
  }

  render() {
    const columns = [
      {
        Header: 'Name',
        accessor: 'show.name',
      },
      {
        Header: 'Language',
        accessor: 'show.language',
      },
      {
        Header: 'Premiered',
        accessor: 'show.premiered',
      },
      {
        Header: 'Rating Average',
        accessor: 'show.rating.average',
      },
    ];

    const { shows } = this.state;
    console.log('render:shows', shows);
    return (
      <Layout>
        <div>
          <h1>Reactive Maintenance</h1>

          <ReactTable data={shows} columns={columns} defaultPageSize={5} />
        </div>
      </Layout>
    );
  }
}

const WrappedComponent = WithAuth(Index);

export default Index;

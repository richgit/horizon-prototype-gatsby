import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import moment from 'moment';
import Img from 'gatsby-image';

import Layout from '../components/Layout';

const IndexPage = ({
  data: {
    caseStudies: { edges },
  },
}) => (
  <Layout>
    <div className="jumbotron p-4">
      <h3 className="display-4">Welcome to Horizon Pronto Portal</h3>
      <p className="lead">This is a prototype of Pronto.</p>
      <hr className="my-4" />
      <p>This prototype is a 'Proof of Concept' project to demonstrate the capabilites of a web-based portal</p>
      <p>For more information, please contact Melanie Hawksworth on 021 902 405</p>
      <p className="lead d-flex justify-content-between">
        <a href="/app/login" className="btn btn-primary btn-lg">
          Login
        </a>
        <a href="/app/reactiveJobs" className="btn btn-primary btn-lg">
          Reactive Jobs
        </a>
      </p>
    </div>
    <h3>Latest News</h3>
    <div className="container">
      <div className="row">
        {edges.map(c => (
          <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
            <Link to={c.node.uid}>
              <div className="card">
                <Img fluid={c.node.data.header_image.localFile.childImageSharp.fluid} alt={c.node.data.title.text} />
                <div className="card-body">
                  <h5 className="font-italic">{c.node.data.subtitle.text}</h5>

                  <BlogDate date={c.node.data.last_publication_date} />
                  {/* <p className="font-italic font-weight-light">by Richard Ware</p> */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    caseStudies: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    caseStudies: allPrismicCaseStudy(sort: { fields: [last_publication_date], order: DESC }) {
      edges {
        node {
          uid
          last_publication_date
          data {
            header_image {
              localFile {
                childImageSharp {
                  fluid(
                    maxWidth: 180
                    maxHeight: 115
                    quality: 90
                    traceSVG: { color: "#021212" }
                    cropFocus: ENTROPY
                  ) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            title {
              text
            }
            subtitle {
              text
            }
          }
        }
      }
    }
  }
`;

function BlogDate(date) {
  const timestamp = Date(date);
  const formattedDate = moment(timestamp).fromNow();
  return <p className="font-weight-light">{formattedDate}</p>;
}

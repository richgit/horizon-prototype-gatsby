import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';

const CaseTemplate = ({ data: { prismicCaseStudy: caseNode } }) => {
  const { data } = caseNode;
  return (
    <Layout>
      <p>111</p>
      <div>
        <p>222</p>
        <Img fluid={data.header_image.localFile.childImageSharp.fluid} />
        <p>333</p>
        <h2 py={4}>
          <h2>{data.title.text}</h2>
        </h2>
      </div>
      <p>444</p>
      <div py={4} px={4} mx="auto">
        <div>{data.subtitle.text}</div>
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
      </div>
    </Layout>
  );
};

export default CaseTemplate;

CaseTemplate.propTypes = {
  data: PropTypes.shape({
    prismicCaseStudy: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query CaseBySlug($uid: String!) {
    prismicCaseStudy(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        header_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 90, traceSVG: { color: "#021212" }) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
              resize(width: 800) {
                src
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
        content {
          html
        }
      }
    }
  }
`;

import React from "react";
import PropTypes from "prop-types";
import BackgroundImage from "../components/BackgroundImage";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: articles } = data.allMarkdownRemark;

    return (
      <div>
        <div className="newsBackgroundContainer" />
        <div className="mobileBackgroundContainer" />
        <section className="section news-section">
          <div className="container">
            <div className="content">
              <div className="styledTitle">NEWS</div>
            </div>
            {articles.map(({ node: article }) => (
              <div className="content " key={article.id}>
                <p>
                  <h3>{article.frontmatter.title}</h3>
                </p>
                <p>
                  {article.frontmatter.blurb}
                  <br />
                  <br />
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query NewsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "article" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            blurb
            templateKey
          }
        }
      }
    }
  }
`;

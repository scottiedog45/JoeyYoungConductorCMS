import React from 'react'
import PropTypes from 'prop-types'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: articles } = data.allMarkdownRemark

    return (
      <div>
        <div className='mobileBackgroundContainer'></div>
       <div className='newsBackgroundContainer'></div>
      <section className="section news-section">
      
        <div className="container">
          <div className="content">
          <div className='styledTitle'>
            NEWS
            </div>
          </div>
          {articles
            .map(({ node: article }) => (
              <div
                className="content"
                style={{padding: '1em 2em' }}
                key={article.id}
              >
                <p>
                  <small>{article.frontmatter.title}</small>
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
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query NewsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "article" } }}
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
`

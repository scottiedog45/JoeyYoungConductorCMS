import React from 'React'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: pics } = data.allMarkdownRemark

    return (
      <div>
      <section className="section">
      
        <div className="container">
          <div className="content">
         
            <h1 className="has-text-weight-bold is-size-2">News</h1>
          </div>
          {pics
            .map(({ node: pic }) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={pic.id}
              >
                
                  <img>{pic.image}</img>
                
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
  query PicsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "pic" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            image
            templateKey
          }
        }
      }
    }
  }
`

import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        <div className="calendarBackgroundContainer" />
        <section className="section calendar-section">
          <div className="content">
            <div className="styledTitle">CALENDAR</div>
          </div>
          <div className="calendar-engagements-container">
            {posts.map(({ node: post }) => (
              <div className="content engagement-content" key={post.id}>
                <p className="orchestra">{post.frontmatter.orchestra}</p>
                <p className="dateTime">{post.frontmatter.dateTime}</p>
                <p className="location">{post.frontmatter.location}</p>
                <p className="program">{post.frontmatter.program}</p>
                <Link className="eventLink" to={post.frontmatter.eventLink}>
                  event link
                </Link>
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
  query CalendarQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "engagement" } } }
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
            eventLink
            orchestra
            location
            program
            templateKey
            dateTime(formatString: "dddd, MMMM DD, YYYY, h:mm a")
          }
        }
      }
    }
  }
`;

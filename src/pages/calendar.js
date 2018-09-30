import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import BackgroundImage from "../components/BackgroundImage";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        <div className="mobileBackgroundContainer" />
        <div className="calendarBackgroundContainer" />
        {/* <BackgroundImage className='calendarBackground' backgroundImage={this.props.data.calendarPageBackground} /> */}
        <section className="section calendar-section">
          <div className="container">
            <div className="content">
              <div className="styledTitle">CALENDAR</div>
            </div>
            <div className="calendar-engagements-container">
              {posts.map(({ node: post }) => (
                <div
                  className="content engagement-content"
                  style={{ padding: "2em 4em" }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.date}
                    </Link>
                    <small>{post.frontmatter.dateTime}</small>
                    <br />
                    <small>{post.frontmatter.location}</small>
                  </p>
                  <p>
                    {post.frontmatter.program}
                    <br />
                    <br />
                    <Link to={post.frontmatter.eventLink}>
                      more information...
                    </Link>
                  </p>
                </div>
              ))}
            </div>
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
      filter: { frontmatter: { templateKey: { eq: "engagement" } }, {draft: {ne: false}} }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            eventLink
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

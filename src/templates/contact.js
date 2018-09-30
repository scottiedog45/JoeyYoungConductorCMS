import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";
import BackgroundImage from "../components/BackgroundImage";

export class ContactPageTemplate extends React.Component {
  render() {
    console.log(this.props);

    const { title, content, contentComponent } = this.props;
    const PageContent = contentComponent || Content;

    return (
      <div>
        <div className="contactBackgroundContainer" />
        <div className="mobileBackgroundContainer" />
        <section className="contact-section section section--gradient">
          <form name="contact" method="POST" netlify>
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Your Role:{" "}
                <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
          <div className="container">
            <div className="styledTitle">CONTACT</div>
            <section className="contact-inner">
              <PageContent className="content" content={content} />
            </section>
          </div>
        </section>
      </div>
    );
  }
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      body={post.frontmatter.body}
      content={post.html}
    />
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        body
      }
    }
  }
`;

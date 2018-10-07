import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";

export class ContactPageTemplate extends React.Component {
  render() {
    console.log(this.props);

    const { title, content, body, contentComponent } = this.props;
    const PageContent = contentComponent || Content;

    return (
      <div>
        <div className="contactBackgroundContainer" />
        <section className="contact-section section section--gradient">
          <div className="styledTitle">CONTACT</div>
          <section className="contact-inner">
            <form className="netlifyForm" name="contact" method="POST" netlify>
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
                  Message: <textarea name="message" />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
            <p>{this.props.body}</p>
          </section>
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

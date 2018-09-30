import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";
import BackgroundImage from "../components/BackgroundImage";

export class AboutPageTemplate extends React.Component {
  render() {
    const { title, content, contentComponent } = this.props;

    const PageContent = contentComponent || Content;

    return (
      <div>
        <div className="aboutBackgroundContainer" />
        {/* <BackgroundImage className='bioBackground' backgroundImage={this.props.bioPageBackground} /> */}
        <div className="mobileBackgroundContainer" />
        <section className="bioSection section section--gradient">
          <div className="container">
            <div className="styledTitle">BIO</div>
            <PageContent className="content bioContent" content={content} />
          </div>
        </section>
      </div>
    );
  }
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      bioPageBackground={data.bioPageBackground}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

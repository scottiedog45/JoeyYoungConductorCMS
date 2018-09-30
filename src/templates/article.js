import React from "react";
import Helmet from "react-helmet";
import Content, { HTMLContent } from "../components/Content";

export const ArticleTemplate = ({
  content,
  contentComponent,
  title,
  blurb,
  helmet
}) => {
  const ArticleContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div>{title}</div>
        <ArticleContent content={content} />
        <div>{blurb}</div>
      </div>
    </section>
  );
};

const Article = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ArticleTemplate
      content={post.html}
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      blurb={post.frontmatter.blurb}
      helmet={<Helmet title={`${post.frontmatter.date} | Article`} />}
    />
  );
};

export default Article;

export const pageQuery = graphql`
  query ArticlesByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        blurb
        title
      }
    }
  }
`;

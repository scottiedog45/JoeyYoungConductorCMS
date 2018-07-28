import React from 'react'
import Helmet from 'react-helmet'
import Content, {HTMLContent} from '../components/Content'

export const EngagementTemplate = ({
  content, 
  contentComponent, 
  date, 
  location, 
  program, 
  helmet
}) => {
  const EngagementContent = contentComponent || Content

  return (
    <section className='section'>
    {helmet || ''}
    <div className='container content'>
    <div>{date}</div>
    <EngagementContent content={content} />
    <div>{location}</div>
    <div>{program}</div>
    </div>
    </section>
  )
}

const Engagement = ({ data }) => {
  const { markdownRemark: post} = data

  return (
    <EngagementTemplate
      content={post.html}
      contentComponent={HTMLContent}
      location={post.frontmatter.location}
      date = {post.frontmatter.date}
      program = {post.frontmatter.program}
      title={post.frontmatter.title}
      helmet={<Helmet title={`${post.frontmatter.date} | Concert`} />}
      />
  )
}

export default Engagement

export const pageQuery = graphql`
  query EngagementByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id 
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        location
        program
      }
    }
  }`
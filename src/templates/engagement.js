import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
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
    <div>{location}</div>
    <div>{program}</div>
    </div>
    </section>
  )
}

const Engagement = ({ data }) => {
  const { markdownRemark: engagement} = data

  return (
    <EngagementTemplate
      content={engagement.html}
      contentComponent={HTMLContent}
      date = {engagement.frontmatter.date}
      helmet={<Helmet title={`${engagement.frontmatter.date} | Concert`} />}
      />
  )
}

export default Engagement

export const pageQuery = graphql`
  query EngagementByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id 
      htl
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        location
        program
      }
    }
  }`
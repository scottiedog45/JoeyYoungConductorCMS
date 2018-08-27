import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import BackgroundImage from '../components/BackgroundImage'

export class ContactPageTemplate extends React.Component {
  
  render() {

  console.log(this.props)

  const { title, content, contentComponent } = this.props
  const PageContent = contentComponent || Content

  return (
    <div>
      <BackgroundImage className='contactBackground' backgroundImage={this.props.contactPageBackground} />
      <div className='mobileBackgroundContainer'></div>
    <section className="contact-section section section--gradient">
    
      <div className="container">
            <div className='styledTitle'>
            CONTACT
            </div>
            <section className='contact-inner'>
              <PageContent className="content" content={content} />
              </section>
      </div>
    </section>
    </div>
  )
}
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      body={post.frontmatter.body}
      content={post.html}
      contactPageBackground = {data.contactPageBackground}
    />
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    contactPageBackground: imageSharp(id: {regex: "/contact/"}) {
      sizes (maxWidth: 1240) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        body
      }
    }
  }
`

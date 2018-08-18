import React from 'react'
import PropTypes from 'prop-types'
import Images from '../components/Images'

export const PicPageTemplate = ({
  pics,
}) => (
  <section className="pics-section section section--gradient">
  <div className='content pics-page-content'>
  <div className='styledTitle'>
            PHOTOS
            </div>
              <Images pics={pics} />
              </div>
  </section>
)


const PicPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <PicPageTemplate
      pics={frontmatter.pics}
    />
  )
}

PicPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PicPage

export const picPageQuery = graphql`
  query PicPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        pics {
          image
          alt
        }
      }
    }
  }
`

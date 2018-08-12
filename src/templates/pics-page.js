import React from 'react'
import PropTypes from 'prop-types'
import Images from '../components/Images'

export const PicPageTemplate = ({
  images,
}) => (
  <section className="section section--gradient">
              <Images images={images} />
  </section>
)


const PicPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <PicPageTemplate
      images={frontmatter.images}
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
        images {
          image
          alt
        }
      }
    }
  }
`

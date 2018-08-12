import React from 'React'
import PropTypes from 'prop-types'
import Images from '../components/Images'

export const PicPageTemplate = ({
  images,
}) => (
  <section className="section section--gradient">
              <Images images={images} />
  </section>
)

// ProductPageTemplate.propTypes = {
//   image: PropTypes.string,
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   description: PropTypes.string,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array,
//   }),
//   main: PropTypes.shape({
//     heading: PropTypes.string,
//     description: PropTypes.string,
//     image1: PropTypes.object,
//     image2: PropTypes.object,
//     image3: PropTypes.object,
//   }),
//   testimonials: PropTypes.array,
//   fullImage: PropTypes.string,
//   pricing: PropTypes.shape({
//     heading: PropTypes.string,
//     description: PropTypes.string,
//     plans: PropTypes.array,
//   }),
// }

const PicPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <PicPageTemplate
      title={frontmatter.title}
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

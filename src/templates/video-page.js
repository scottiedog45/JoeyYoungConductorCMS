import React from 'react'
import PropTypes from 'prop-types'
import Videos from '../components/Videos'

export const VideoPageTemplate = ({
  videos,
}) => (
  <section className="section section--gradient">
              <Videos videos={videos} />
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

const VideoPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <VideoPageTemplate
      videoUrl={frontmatter.videoUrl}
      textDescription={frontmatter.textDescription}
    />
  )
}

VideoPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default VideoPage

export const videoPageQuery = graphql`
  query VideoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        videos {
          videoUrl
          textDescription
        }
      }
    }
  }
`

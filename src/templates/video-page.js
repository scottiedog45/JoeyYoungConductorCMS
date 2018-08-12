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


const VideoPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <VideoPageTemplate
      videos={frontmatter.vidoes}
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

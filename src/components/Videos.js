import React from 'React'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Videos = ({ videos }) => (
  <div>
    {videos.map(videos => (
      <div key={v4()} className="message">
        <p className="message-body" >
          {video.videoUrl}
          {video.textDescription}
        </p>
      </div>
    ))}
  </div>
)

// Testimonials.propTypes = {
//   testimonials: PropTypes.arrayOf(
//     PropTypes.shape({
//       img: PropTypes.string,
//       author: PropTypes.string,
//     })
//   ),
// }

export default Videos

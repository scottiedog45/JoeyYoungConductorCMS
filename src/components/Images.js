import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Images = ({ images }) => (
  <div>
    {images.map(image => (
      <div key={v4()} className="message">
        <img className="message-body" alt={image.alt}>
          {image.image}
        </img>
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

export default Images

import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Images = ({ images }) => (
  <div>
    {images.map(image => (
      <div key={v4()} className="message">
        <img src={image.image} className="message-body" alt={image.alt} />
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

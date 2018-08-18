import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Images = ({ pics }) => (
  <div>
    {pics.map(pic => (
      <div key={v4()} className="message">
        <img src={pic.image} className="message-body" alt={pic.alt} />
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

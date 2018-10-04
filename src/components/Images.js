import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const Images = ({ pics }) => (
  <div className="image-flex">
    {pics.map(pic => (
      <div className="image-container" key={v4()}>
        <img src={pic.image} alt={pic.alt} />
      </div>
    ))}
  </div>
);

// Testimonials.propTypes = {
//   testimonials: PropTypes.arrayOf(
//     PropTypes.shape({
//       img: PropTypes.string,
//       author: PropTypes.string,
//     })
//   ),
// }

export default Images;

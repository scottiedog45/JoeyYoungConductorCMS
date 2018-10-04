import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import YouTube from "react-youtube";

const Videos = ({ videos }) => (
  <div className="videoListContainer">
    {videos.map(video => (
      <div key={v4()} className="video-container">
        <p>{video.textDescription}</p>
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

export default Videos;

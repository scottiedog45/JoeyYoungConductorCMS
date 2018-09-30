import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import YouTube from "react-youtube";

const Videos = ({ videos }) => (
  <div>
    {videos.map(video => (
      <div key={v4()} className="video-container">
        <YouTube videoId={video.videoUrl} opts={opts} />
      </div>
    ))}
  </div>
);

const opts = {
  height: "500",
  width: "100%"
};

// Testimonials.propTypes = {
//   testimonials: PropTypes.arrayOf(
//     PropTypes.shape({
//       img: PropTypes.string,
//       author: PropTypes.string,
//     })
//   ),
// }

export default Videos;

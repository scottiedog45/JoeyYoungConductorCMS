import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import YouTube from "react-youtube";

const Videos = ({ videos }) => (
  <div className="videoListContainer">
    {videos.map(video => (
      <div key={v4()} className="video-container">
        <iframe
          width="560"
          height="315"
          position="absolute"
          scrolling="yes"
          src="https://www.youtube.com/embed/m7Bc3pLyij0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
        {/* <YouTube videoId={video.videoUrl} opts={opts} /> */}
      </div>
    ))}
  </div>
);

const opts = {
  height: "auto",
  width: "95vh"
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

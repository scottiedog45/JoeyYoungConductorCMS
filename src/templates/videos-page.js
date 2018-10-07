import React from "react";
import PropTypes from "prop-types";
import Videos from "../components/Videos";
import { v4 } from "uuid";

//make this a react component and
//const changeVid = (e) => {
//   this.setState({
//     video = e.target.href
// }

class VideoPageTemplate extends React.Component {
  state = {
    vids: this.props.videos,
    src: "https://www.youtube.com/embed/FYw1wcGKV28"
  };

  changeVid(e) {
    this.setState({
      src: e.target.getAttribute("data")
    });
  }

  render() {
    let somevids = this.state.vids.map(vid => (
      <div key={v4()} className="vidListItem">
        <p data={vid.videoUrl} onClick={e => this.changeVid(e)}>
          {vid.textDescription}
        </p>
        <p className="vidComposer">{vid.composer}</p>
      </div>
    ));

    return (
      <section className="videos-section section section--gradient">
        <div className="content video-content">
          <div className="content">
            <div className="styledTitle">VIDEO</div>
          </div>
          <div className="vidPageContentFlex">
            <div className="vidList">{somevids}</div>
            <iframe
              className="videoIframe"
              width="800"
              height="480"
              scrolling="yes"
              src={this.state.src}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    );
  }
}

// export const VideoPageTemplate = ({ videos }) => (

//       <iframe
//         width="560"
//         height="315"
//         scrolling="yes"
//         src="https://www.youtube.com/embed/m7Bc3pLyij0"
//         frameborder="0"
//         allow="autoplay; encrypted-media"
//         allowfullscreen
//       />

// );

const VideoPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return <VideoPageTemplate videos={frontmatter.videos} />;
};

VideoPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default VideoPage;

export const videoPageQuery = graphql`
  query VideoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        videos {
          videoUrl
          textDescription
          composer
        }
      }
    }
  }
`;

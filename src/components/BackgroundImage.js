import React from "react";
import Img from "gatsby-image";

const BackgroundImage = props => (
  <Img
    className={props.className}
    alt="background"
    sizes={props.backgroundImage.sizes}
  />
);

export default BackgroundImage;

import React from "react";
import Link from "gatsby-link";

export default class Logo extends React.Component {
  render() {
    return (
      <Link to="/">
        <div className="logo">
          <p>JOSEPH YOUNG</p>
        </div>
      </Link>
    );
  }
}

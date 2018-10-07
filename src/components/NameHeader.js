import React from "react";
import PropTypes from "prop-types";

const NameHeader = () => (
  <div>
    <h1 className="landingName">JOSEPH YOUNG</h1>
  </div>
);

NameHeader.propTypes = {
  name: PropTypes.string
};

export default NameHeader;

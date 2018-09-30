import React from "react";
import Link from "gatsby-link";

export default class Logo extends React.Component {
  render() {
    return (
      <Link to="/">
        <svg
          className="svgLogo"
          width="40px"
          height="40px"
          version="1.1"
          viewBox="0 0 56.316025 54.728519"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(-45.396 -140.78)">
            <text
              transform="scale(1.038 .96335)"
              x="47.813656"
              y="193.70543"
              fill={this.props.color}
              fontFamily="'Poiret One'"
              fontSize="53.131px"
              letterSpacing="0px"
              strokeWidth=".27673"
              wordSpacing="0px"
              style={{
                fontFeatureSettings: "normal",
                fontVariantCaps: "normal",
                fontVariantLigatures: "normal",
                fontVariantNumeric: "normal",
                lineHeight: "1.25"
              }}
              xmlSpace="preserve"
            >
              <tspan
                x="47.813656"
                y="193.70543"
                fontFamily="'Poiret One'"
                fontSize="53.131px"
                strokeWidth=".27673"
                style={{
                  fontFeatureSettings: "normal",
                  fontVariantCaps: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal"
                }}
              >
                J
              </tspan>
            </text>
            <text
              transform="scale(.99462 1.0054)"
              x="68.824501"
              y="186.31206"
              fill={this.props.color}
              fontFamily="'Poiret One'"
              fontSize="51.72px"
              letterSpacing="0px"
              strokeWidth=".26938"
              wordSpacing="0px"
              style={{
                fontFeatureSettings: "normal",
                fontVariantCaps: "normal",
                fontVariantLigatures: "normal",
                fontVariantNumeric: "normal",
                lineHeight: "1.25"
              }}
              xmlSpace="preserve"
            >
              <tspan
                x="68.824501"
                y="186.31206"
                fontFamily="'Poiret One'"
                fontSize="51.72px"
                strokeWidth=".26938"
                style={{
                  fontFeatureSettings: "normal",
                  fontVariantCaps: "normal",
                  fontVariantLigatures: "normal",
                  fontVariantNumeric: "normal"
                }}
              >
                Y
              </tspan>
            </text>
            <rect
              x="45.773"
              y="141.16"
              width="55.562"
              height="53.975"
              fill="none"
              stroke={this.props.color}
              strokeWidth=".75353"
            />
          </g>
        </svg>
      </Link>
    );
  }
}

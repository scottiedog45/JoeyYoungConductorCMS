import React from "react";
import NameHeader from "../components/NameHeader";
import LandingQuote from "../components/LandingQuote";

export default class IndexPage extends React.Component {
  render() {
    return (
      <section className="landing-section">
        <div className="landingBackgroundContainer" />
        <NameHeader />
        <LandingQuote />
      </section>
    );
  }
}

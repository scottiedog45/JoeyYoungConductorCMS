import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import NameHeader from '../components/NameHeader'
import LandingQuote from '../components/LandingQuote'
import Logo from '../components/Logo'


export default class IndexPage extends React.Component {
  render() {
    

    return (
      <section className='landing-section'>
      <div className='landingBackgroundContainer'></div>
      <NameHeader />
      <LandingQuote />
      </section>

    )
  }
}






import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import NameHeader from '../components/NameHeader'
import LandingQuote from '../components/LandingQuote'
import backgroundImage from '../img/landingPage.jpeg'


export default class IndexPage extends React.Component {
  render() {
    

    return (
      <section>
      <img className='landingImage' src={backgroundImage} />
      <NameHeader />
      <LandingQuote />
      </section>

    )
  }
}






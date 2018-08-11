import React from 'React'
import PropTypes from 'prop-types'

const LandingQuote = () => (
    <div className='landingQuote'>
        <p>"The Dynamism, elegance and fluency of Joseph Young, a model of technique and gesture, was contagious to the Symphony Orchestra of Radiotelevisión Española.” </p>
        <p className='landingQuoteAuthor'>Luis Mazorra Incera<br />forumclassico.es</p>
    </div>
)

LandingQuote.PropTypes = {
    quote: PropTypes.string, 
    author: PropTypes.string
}

const landingQuoteStyle = {

}

const quoteStyle = {}

const authorStyle = {}

export default LandingQuote


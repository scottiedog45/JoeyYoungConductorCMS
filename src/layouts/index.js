import React from 'React'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import SocialMediaNavbar from '../components/SocialMediaNavbar'
import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <SocialMediaNavbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

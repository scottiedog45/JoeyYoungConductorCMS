import React from 'react'
import PropTypes from 'prop-types'
import Helmet from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-helmet'

import SocialMediaNavbar from '../components/SocialMediaNavbar'
import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Joseph Young" />
    <Navbar />
    <SocialMediaNavbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

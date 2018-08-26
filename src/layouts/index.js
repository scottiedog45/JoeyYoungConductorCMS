import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import BurgerMenu from '../components/BurgerMenu'
import NavbarBlack from '../components/NavbarBlack'
import SocialMediaNavbarBlack from '../components/SocialMediaNavbarBlack'

import SocialMediaNavbar from '../components/SocialMediaNavbar'
import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Joseph Young" />
    {location.href.includes('calendar') ? <NavbarBlack /> : <Navbar /> }
    <BurgerMenu />
    {location.href.includes('calendar') ? <SocialMediaNavbarBlack /> : <SocialMediaNavbar />}
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

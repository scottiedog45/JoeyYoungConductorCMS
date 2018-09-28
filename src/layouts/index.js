import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import BurgerMenu from '../components/BurgerMenu'
import NavbarBlack from '../components/NavbarBlack'
import SocialMediaNavbarBlack from '../components/SocialMediaNavbarBlack'
import Logo from '../components/Logo'
import SocialMediaNavbar from '../components/SocialMediaNavbar'
import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => {
  if (typeof window !== `undefined`) {
    return (
  <div>
    <Helmet title="Joseph Young" />
    <Logo color={window.location.href.includes('calendar') ? 'black' : 'white'} />
    {window.location.href.includes('calendar') ? <NavbarBlack /> : <Navbar /> }
    <BurgerMenu />
    {window.location.href.includes('calendar') ? <SocialMediaNavbarBlack /> : <SocialMediaNavbar />}
    <div>{children()}</div>
  </div>
    )
  }
  return <div></div>
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

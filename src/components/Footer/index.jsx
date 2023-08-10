import React from 'react'
import './style.css'
import {Link as LinkAnchor} from "react-router-dom"
import Face from "/redes/facebook.svg"
import Insta from "/redes/instagram.svg"
import Linkedin from "/redes/linkedin.svg"
import Twitter from "/redes/twitter.svg"
import House from "/house-door-fill.svg"
import Imag from '/image-alt.svg'

function Footer() {
  return (
    <footer>
      <button className='buttonR'>
        <LinkAnchor to={'/'} className='logo'>
          <img src={House} alt="home" className='logo'/>  
        </LinkAnchor>
      </button>
      <button className='buttonR'>
        <img src={Face} alt="facebookLogo" className='logo'/>
      </button>
      <button className='buttonR'>
        <img src={Insta} alt="instagramLogo" className='logo'/>
      </button>
      <button className='buttonR'>
        <img src={Linkedin} alt="linkedinLogo" className='logo'/>
      </button>
      <button className='buttonR'>
        <img src={Twitter} alt="twitterLogo" className='logo'/>
      </button>
      <button className='buttonR'>
        <LinkAnchor to={'/cities'} className='logo'>
          <img src={Imag} alt="cities" className='logo'/>  
        </LinkAnchor>
      </button>
    </footer>
  )
}

export default Footer
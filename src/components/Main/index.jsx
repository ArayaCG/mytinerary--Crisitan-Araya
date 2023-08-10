import React from 'react'
import Imag from '/image-alt.svg'
import './style.css'
function index() {
  return (
    <>
    <div className="vista">
      <div className="carta">
          <h2>Find the perfect destination</h2>
          <p>Our app will help you find the perfect path for ypur next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
          <button>View more</button>
      </div>
      <div className="imag">
          <img src={Imag} alt="imagen" />
      </div>
    </div>
    </>
  )
}

export default index
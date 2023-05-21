import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className='paddings innerWidth flexCenter footer-container'>
           <div className='flexColStart footer-left'>
              <img src="./logo2.png" alt="logo" sizes='30'/>
              <span className='secondaryText'>
              Our vision is to make all people <br/>
the best place to live for them.
              </span>
           </div>
           <div className='flexColStart footer-right'>
               <span className='primaryText'>
               Address
                </span>
                <span className='secondaryText'>
                145 New York, FL 5467, USA
                </span>

                <div className='flexCenter footerMenu'>
                       <span>Properties</span>
                       <span>Products</span>
                       <span>Services</span>
                       <span>About Us</span>
                 </div>
           </div>
        </div>
     </div>
  )
}

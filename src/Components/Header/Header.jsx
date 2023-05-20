import React from 'react'
import '../Header/Header.css'

export default function Header() {
  return (
    <div className='h-wrapper'>
        <div className='h-container paddings innerWidth'>
             <img src="./logo.png" alt="HOMYZ" width={100} />
             <div className='h-menu'>
                 <a href="#">Residencies</a>
                 <a href="#">Our Value</a>
                 <a href="#">Contact Us</a>
                 <a href="#">Get Started</a>
                 <button className='button'>
                      <a href="#">Contact</a>
                 </button>
             </div>
        </div>
    </div>
  )
}

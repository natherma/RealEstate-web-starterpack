import React from 'react'
import '../Header/Header.css'
import {FiMenu} from 'react-icons/fi'
import {IoMdClose} from "react-icons/io"
import { useState } from 'react'


export default function Header() {
  let [menuStatus,setMenuStatus] = useState("close")
  let onTrigger = () => 
  {
    menuStatus==="close"?setMenuStatus("open"):setMenuStatus("close")
  }
 let close = ()=>
 {
   setMenuStatus("close")
 }

  return (
    <div className='h-wrapper'>
        <div className='h-container paddings innerWidth'>
             <img src="./logo.png" alt="HOMYZ" width={100} />
             <div className={`h-menu ${menuStatus}`}>
                 <a href="#slider" onClick={close}>Residencies</a>
                 <a href="#value" onClick={close}>Our Value</a>
                 <a href="#contact" onClick={close}>Contact Us</a>
                 <a href="#" onClick={close}>Get Started</a>
                 <button className='button'>
                      <a href="#contact" onClick={close}>Contact</a>
                 </button>
             </div>
             <div className='trigger'>
             <FiMenu size={30}  className={`openButton ${menuStatus}`} onClick={onTrigger}/>
             <IoMdClose size={30} className={`closeButton ${menuStatus}`} onClick={onTrigger}/>
             </div>
        </div>
    </div>
  )
}

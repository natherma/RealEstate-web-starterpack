import React from 'react'
import '../Hero/Hero.css'
import {HiLocationMarker} from "react-icons/hi"
import Stats from '../Stats/Stats'

let statsData = [
    {start:8800,end:9000,duration:4,text:"Premium Product"},
    {start:1800,end:2000,duration:4,text:"Happy Customer"},
    {start:0,end:28,duration:3,text:"Awards Winning"}
]


export default function 
() {
  return (
    <div className='hero-wrapper'>
         <div className='hero-container innerWidth paddings'>
           <div className='hero-left'>
             <div className='hero-title'>
             <div className="orange-circle"></div>
             <h1>                
                Discover<br/>
                Most Suitable<br/>
                Property
             </h1>
             </div>
             <div className='hero-description'>
                <span className='secondaryText'>
                Find a variety of properties that suit you very easilty <br/>
                Forget all difficulties in finding a residence for you
                </span>
             </div>
             <div className='search-bar'>
                   <HiLocationMarker color='var(--blue)' size={25}/>
                   <input type="text" />
                   <div className="button">
                    Search
                   </div>
             </div>
             <div className='stats'>
                   {
                   statsData.map(element=>
                    {
                        return <Stats start={element.start} end={element.end} duration={element.duration} text={element.text}/>
                    })
                   }
             </div>
           </div>
           <div className='hero-right'>
                 <div className='hero-image-container'>
                    <img src="./hero-image.png" alt="hero-image "/> 
                </div>  
           </div>
         </div>
    </div>
  )
}

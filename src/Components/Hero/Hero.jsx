import React from 'react'
import '../Hero/Hero.css'
import {HiLocationMarker} from "react-icons/hi"
import Stats from '../Stats/Stats'
import {easeInOut, motion, spring} from "framer-motion"



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
             <motion.h1  initial={{padding:"1rem",opacity:0}} animate={{padding:0,opacity:1}} transition={{duration:1.5,type:easeInOut}}>                
                Discover<br/>
                Most Suitable<br/>
                Property
             </motion.h1>
             </div>
             <div className='hero-description'>
                <span className='secondaryText'>
                Find a variety of properties that suit you very easilty <br/>
                Forget all difficulties in finding a residence for you
                </span>
             </div>
             <div className='search-bar'>
             <HiLocationMarker color='var(--blue)' size={25} alt="Location"/>
                   <input type="text" />
                   <div className="button">
                    Search
                   </div>
             </div>
             <div className='stats'>
                   {
                   statsData.map(element=>
                    {
                        return <Stats start={element.start} end={element.end} duration={element.duration} text={element.text} key={element.start}/>
                    })
                   }
             </div>
           </div>
           <div className='hero-right'>
                 <motion.div className='hero-image-container' initial={{margin:"1rem",opacity:0}} animate={{margin:0,opacity:1}} transition={{duration:1.5,type:spring}}>
                    <img src="./hero-image.png" alt="hero-image "/> 
                </motion.div>  
           </div>
         </div>
    </div>
  )
}

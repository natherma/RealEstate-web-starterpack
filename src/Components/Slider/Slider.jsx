import React from 'react'
import '../Slider/Slider.css'
import {Swiper, SwiperSlide,useSwiper} from 'swiper/react'
import 'swiper/css'
import data from '../../utils/slider.json'
import { slidersettings } from '../../utils/Common'


export default function Slider() {
  return (
    <div className='slider-wrapper' style={{overflow:"hidden"}}>
         <div className="slider-container innerWidth paddings">
                <div className='Swipper-header'>
                    <span className='orangeText'>
                    Best Choices
                    </span>
                    <span className="primaryText">
                    Popular Residencies
                    </span>
                </div>
                <Swiper {...slidersettings}>
                <SliderButtons/>
                    {
                        data.map((card,i)=>
                        {
                            return (          
                            <SwiperSlide key={i}>
                            <div className='slider-card'>
                               <img src={card.image} alt={card.image} />
                               <div className='secondaryText  slider-card-price'>
                                <span style={{color:"orange"}}>$</span>
                                <span>
                                    {
                                        card.price
                                    }
                                </span>
                               </div>
                               <span className='primaryText slider-text-header'>
                                     {
                                        card.name
                                     }
                               </span>
                               
                               <span className='secondarytText slider-text'>
                                     {
                                        card.detail
                                     }
                               </span>
                             </div>  
                           </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
         </div>
    </div>
  )
}

const SliderButtons = () =>
{
    let Swipper = useSwiper()
    return (
      <div className="slider-buttons">
            <button onClick={()=>{Swipper.slidePrev()}}>
                &lt;
            </button>
            <button onClick={()=>{Swipper.slideNext()}}>
                &gt;
            </button>
      </div>
    )
}
import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs' 
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

export default function Contact() {
  return (
    <div className='contact-wrapper' id='contact'>
        <div className='paddings innerWidth flexCenter contact-container'>
              <div className='flexColStart contact-left'>
                    <span className='orangeText'>
                    Our Contact
                        </span>
                    <span className='primaryText'>
                    Easy to contact us
                    </span>
                    <span className="secondaryText">We always ready to help by providijng the best services for you. We beleive a good <br/> blace to live can make your life better
                    </span>

                    <div className='flexColStart contactMode'>
                          {/* First Row */}
                          <div className="row">
                          <div class="flexColCenter mode">
                            <div class="flexStart">
                                <div class="flexCenter Icon">
                                    <MdCall size={25}/>
                                 </div>
                                    <div class="flexColStart detail">
                                        <span class="primaryText">Call</span>
                                        <span class="secondaryText">021 123 145 14</span>
                                   </div>
                            </div>
                                <div class="flexCenter button">
                                    Call now
                                </div>
                          </div>
                          <div class="flexColCenter mode">
                            <div class="flexStart">
                                <div class="flexCenter Icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                 </div>
                                    <div class="flexColStart detail">
                                        <span class="primaryText">Chat</span>
                                        <span class="secondaryText">021 123 145 14</span>
                                   </div>
                            </div>
                                <div class="flexCenter button">
                                    Chat Now
                                </div>
                          </div>
                          </div>
                          {/* Second Row*/}
                          <div className="row">
                          <div class="flexColCenter mode">
                            <div class="flexStart">
                                <div class="flexCenter Icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                 </div>
                                    <div class="flexColStart detail">
                                        <span class="primaryText">Video Call</span>
                                        <span class="secondaryText">021 123 145 14</span>
                                   </div>
                            </div>
                                <div class="flexCenter button">
                                    Video Call now
                                </div>
                          </div>
                          <div class="flexColCenter mode">
                            <div class="flexStart">
                                <div class="flexCenter Icon">
                                    <BsFillChatDotsFill size={25}/>
                                 </div>
                                    <div class="flexColStart detail">
                                        <span class="primaryText">Mesaage</span>
                                        <span class="secondaryText">021 123 145 14</span>
                                   </div>
                            </div>
                                <div class="flexCenter button">
                                    Message Now
                                </div>
                          </div>
                          </div>
                    </div>
              </div>
              <div className='contact-right'>
                     <div className="hero-image-container">
                        <img src="./contact.jpg" alt="Image"/>
                    </div> 
              </div>
        </div>
    </div>
  )
}

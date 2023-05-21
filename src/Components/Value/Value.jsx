import React from 'react'
import '../Value/Value.css'
import {Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel,AccordionItemState} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../utils/accordion'


export default function Value() {
  return (
    <div className='value-wrapper'>
        <div className="innerWidth flexCenter value-container paddings">
           <div className="value-left">
            <div className="hero-image-container">
                <img src="./value.png" alt="Image" />
            </div>
           </div>
           <div className="flexColStart value-right">
               <span className='orangeText'>
                Our Value
                </span>
               <span className='primaryText'>
               Value We Give to You
               </span>
               <span className="secondaryText">
               We always ready to help by providijng the best services for you. <br/>
               We beleive a good blace to live can make your life better
               </span>
               <Accordion className='accordian' allowMultipleExpanded={false} preExpanded={[0]}>
                {
                  data.map((item,i)=>
                  {
                    return (
                    <AccordionItem className='accordianItem' key={i} uuid={i}>
                    <AccordionItemHeading>
                        <AccordionItemButton className='flexCenter accordianButton'>
                         <div className='flexCenter Icon'>
                               {
                                 item.icon
                               }
                         </div>
                         <span className="primaryText">
                            {item.heading}
                         </span>
                         <div className='flexCenter Icon'>
                          <MdOutlineArrowDropDown size={20}/>
                         </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="secondaryText">
                            {
                                item.detail
                            }
                        </p>
                    </AccordionItemPanel>
                 </AccordionItem>
                    )
                  })
                }    
               </Accordion>
           </div>
        </div>
    </div>
  )
}

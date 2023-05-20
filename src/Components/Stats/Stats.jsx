import React from 'react'
import CountUp from 'react-countup'
import "../Stats/Stats.css"


export default function Stats(props) {
   let {start,end,duration,text} = props
  return (
    <div className='stats_box'>
        <span className='stats_box_count'>
            <CountUp  start={start}  end={end} duration={duration}/>
            <span className='stats_box_plus'>
             +
            </span>
        </span>
        <span className='stats_box_text secondaryText'>
            {
                text
            }
        </span>
    </div>
  )
}

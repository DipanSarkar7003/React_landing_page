import React from 'react'
import Databiz from "../images/client-databiz.svg"
import Audio_phile from "../images/client-audiophile.svg"
import Meet from "../images/client-meet.svg"
import Maker from "../images/client-maker.svg"

function Icon_trey() {

 let  icon_sources = [Databiz, Audio_phile,Meet,Maker]
  return (
   <div className='m-auto flex gap-10 py-20 w-[100%] '>
{
  icon_sources.map((item)=>{
    return(
      <img src= {item} key={item} className='w-[3.5rem] h-[1.5rem] ' />
    )
  })
}
   </div>
  )
}

export default Icon_trey

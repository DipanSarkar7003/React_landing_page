import React from 'react'
import banner from "../images/desktop_hero.png"
function Hero_image() {
  return (
 <>
 <img src={banner} alt='i am a hero image' className='w-[100%] h-[100%]  md:w-[50%] md:h-[50vw] sm:h-[80vw]   '/>
 </>
  )
}

export default Hero_image

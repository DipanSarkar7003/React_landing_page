import React from 'react'
import Icon_trey from './Icon_trey'

function HeroText() {
  return (
    <div className=' w-[100vw] text-center sm:text-left sm:py-28 md:h-[50vw]  md:max-w-[55%] '>
      <h1 className='text-nowrap text-[10vw] sm:text-[5.5vw] font-extrabold leading-none font-[Epilogue]'>
        Make <br></br>remote work
      </h1>
      <p className=' text_paragraph m-auto w-[80%] sm:mx-[0] w-[60%] py-[5vw]  md:py-[3vw]  md:w-[70%] md:m-0'>Line 6:2:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don't need .
      </p>
      <button className='bg-black text-white text-md px-6 py-4 rounded-[15px]' > Learn more</button>

      <Icon_trey/>

    </div>
  )
}

export default HeroText

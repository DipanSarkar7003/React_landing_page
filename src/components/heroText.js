import React from 'react'
import Icon_trey from './Icon_trey'

function HeroText() {
  return (
    <div className='py-28 '>
      <h1 className='text-[5vw] font-extrabold leading-none font-[Epilogue]'>
        Make remote work
      </h1>
      <p className='py-10 font-[Epilogue] text-[hsl(0, 0%, 41%) w-[60%]'>Line 6:2:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don't need .
      </p>
      <button className='bg-black text-white text-sm px-6 py-4 rounded-md' > Learn more</button>

      <Icon_trey/>

    </div>
  )
}

export default HeroText

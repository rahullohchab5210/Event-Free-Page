import React from 'react'

function HeroSection() {
  return (
    <div className="bg-[url(/assets/images/events_hero_bg.png)] bg-center bg-cover bg-no-repeat ">
      <div className="max-w-330 mx-auto px-3">
        <div className='flex flex-col'>
          <p className="  text-[#ffffffb9] font-[Poppins] font-normal text-[16px] leading-[150%] tracking-[0] pt-32.75 ">{`Home > Events`}</p>
          <h3 className=' text-white font-[Poppins] font-semibold text-[64px] leading-[150%] tracking-[0]'>
            Events
          </h3>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
import React from 'react'
import lineImg from '../../public/assets/images/line-image.png'
import BlueBox from './BlueBox'
import Button from '../components_common/Btn'

function HeroSection() {
  return (
    <div className="bg-[url('/assets/images/section1-bg.png')] bg-no-repeat bg-cover bg-center relative h-246.5 w-full after:content-[''] after:absolute after:inset-0 after:bg-[#00000091]">
      <div className="max-w-330 mx-auto px-3">
        <div className="relative top-64 z-1  max-[861px]:top-50 max-[380px]:top-45 max-[338px]:top-30 ">
          <h2 className='text-white font-[Poppins] text-[32px] md:text-[64px] leading-[150%] font-bold max-w-261 w-full tracking-[0%]'>Sed tortor in <span className="relative inline-block">
            quisque morbi
            <img src={lineImg} alt="" className="absolute -bottom-2 left-0 w-full h-auto" />
          </span> scelerisque etiam eu.
          </h2>
          <p className="font-['Yantramanav',sans-serif] font-normal text-[20px] leading-[100%] tracking-[0] text-white max-w-191.25 pb-8.25 pt-4.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc efficitur urna in dictum suscipit.Suspendisse maximus ipsum sem.
            Donec ut justo et leo congue lacinia vitae nec arcu.Nunc elit elit, malesuada idsuscipit cursus,
          </p>
          <div className="max-[1060px]:rounded-[40px] max-[1060px]:gap-5 max-[336px]:flex max-[336px]:flex-col max-[336px]:items-center max-[336px]:justify-center max-[336px]:gap-1.25 flex items-center gap-5.75">
            <Button className="rounded-[28px] text-white font-semibold text-[20px]"
              text={'Get Started'}
            />
            <small className="text-white font-normal text-xl leading-normal font-['Poppins',sans-serif]">Learn more</small>
          </div>
          <BlueBox />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
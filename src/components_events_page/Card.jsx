import React from 'react'

function Card(props) {
  return (
    <article
      className="pl-10.75 pr-9.25 pt-8.75 pb-7.5 bg-white border border-black/20 rounded-[30px] hover:shadow-[0_8px_35px_rgba(0,0,0,0.1)] hover:border-white transition">
      <img src={props.img} alt="photo" className="w-full mb-4 rounded-[20px]" />
      <h2 className="text-[24px] font-semibold leading-[150%] tracking-[0%] text-black mb-4">{props.title}</h2>
      <div className="flex flex-col gap-3">
        <span className="flex items-center gap-2 opacity-60">
          {props.calender_svg}
          <span className='font-[Poppins] text-[16px] font-normal leading-[150%] tracking-[0%]'> {props.date} </span>
        </span>
        <span className="flex items-center gap-2 opacity-60">
          {props.location_svg}
          <span className='font-[Poppins] text-[16px] font-normal leading-[150%] tracking-[0%]'>  {props.location}</span>
        </span>
        <span className="flex items-center gap-2 opacity-60">
          {props.members_svg}
          <span className='font-[Poppins] text-[16px] font-normal leading-[150%] tracking-[0%]'>  {props.members} </span>
        </span>
      </div>
      <button
        className="mt-6 bg-[#2C49FE] text-white px-6 py-2 rounded-full text-[16px] hover:bg-[#1f3bd1] transition">
        Go Check
      </button>
    </article>
  )
}

export default Card
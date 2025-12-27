import React from 'react'

function ExploreCard(props) {
  return (
    <article className='card pl-3.25 pt-2.5 pr-2.75 pb-6 hover:shadow-[2px_9px_32px_rgba(0,0,0,0.06)] rounded-[5px]'>
      <img src={props.img} alt="cardimage" className='pb-3.25 w-full' />
      <div className='pl-2.75'>
        <strong className='font-[Poppins] font-normal text-black/70 text-[14px] leading-[100%] tracking-[0%]'>{props.date}</strong>
        <h3 className='font-[Poppins] font-medium text-black text-[24px] leading-[100%] tracking-[0%]'>{props.title}</h3>
        <p className='max-w-67.5 pt-1.25 font-[Poppins] font-normal text-black/70 text-[16px] leading-[100%] tracking-[0%]'>{props.description}</p>
      </div>
    </article>
  )
}

export default ExploreCard
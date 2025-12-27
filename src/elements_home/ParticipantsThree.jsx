import React from 'react'

function ParticipantsThree(props) {
  return (
    <>
      <span>{props.icon}</span>
      <strong className='text-white font-bold text-[35px] leading-[100%] tracking-[0%] font-[poppins]'>{props.number}</strong>
      <h6 className='text-white font-normal text-[18px] leading-[100%] tracking-[0%] font-[poppins]'>{props.text}</h6>
    </>
  )
}

export default ParticipantsThree
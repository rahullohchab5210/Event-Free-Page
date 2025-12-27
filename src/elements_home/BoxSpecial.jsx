import React from 'react'

function BoxSpecial(props) {
    return (
        <>
            <div className="bg-white w-19.75 h-19.75 border-2 border-solid border-[rgba(44,73,254,1)] flex items-center justify-center rounded-[100px] absolute top-[-20%] left-[35%]">{props.icon}</div>
            <div className='flex flex-col gap-2'>
                <h3 className='group-hover:text-white text-[rgba(44,73,254,1)] font-medium text-[25px] leading-[100%] tracking-[0%] pt-2.5 font-[Poppins]'>{props.title}</h3>
                <p className='group-hover:text-white max-w-47.5 font-normal text-[16px] leading-[150%] tracking-[0%] text-center font-[Poppins]'>{props.description}</p>
            </div>
        </>
    )
}

export default BoxSpecial
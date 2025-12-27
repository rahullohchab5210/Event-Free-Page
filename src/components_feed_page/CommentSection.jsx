import React from 'react'

function CommentSection(props) {
    return (
        <>
            <div className='group flex w-full gap-5 max-sm:flex-col max-sm:gap-2'>
                <img src={props.img} alt="image" className='w-14 h-14' />
                <div className='flex flex-col w-full'>
                    <div className='px-5 pt-3.5 pb-5 bg-[#F1F2F5] w-full rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] group-hover:shadow-lg'>
                        <div className='flex flex-col gap-2.5 font-[Poppins] text-[16px] leading-[150%] tracking-[0%]'>
                            <h4 className='font-medium text-black'>Username</h4>
                            <p className='font-normal text-black/60'>
                                {props.comment}
                            </p>
                        </div>
                    </div>
                    <div className='ml-5 mt-2'>
                        <div
                            onClick={props.onRemove}
                            className='flex flex-row items-center gap-1.25 cursor-pointer'>
                            <span className='opacity-60'>
                                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 4.5C19 4.74493 18.91 4.98134 18.7473 5.16437C18.5845 5.34741 18.3603 5.46434 18.117 5.493L18 5.5H17.155L15.924 18.02C15.857 18.6994 15.5397 19.3295 15.0338 19.7879C14.5279 20.2462 13.8697 20.5001 13.187 20.5H5.813C5.13035 20.5001 4.47207 20.2462 3.9662 19.7879C3.46033 19.3295 3.14302 18.6994 3.076 18.02L1.845 5.5H1C0.734784 5.5 0.48043 5.39464 0.292893 5.20711C0.105357 5.01957 0 4.76522 0 4.5C0 4.23478 0.105357 3.98043 0.292893 3.79289C0.48043 3.60536 0.734784 3.5 1 3.5H6C6 3.04037 6.09053 2.58525 6.26642 2.16061C6.44231 1.73597 6.70012 1.35013 7.02513 1.02513C7.35013 0.700121 7.73597 0.442313 8.16061 0.266422C8.58525 0.0905302 9.04037 0 9.5 0C9.95963 0 10.4148 0.0905302 10.8394 0.266422C11.264 0.442313 11.6499 0.700121 11.9749 1.02513C12.2999 1.35013 12.5577 1.73597 12.7336 2.16061C12.9095 2.58525 13 3.04037 13 3.5H18C18.2652 3.5 18.5196 3.60536 18.7071 3.79289C18.8946 3.98043 19 4.23478 19 4.5Z" fill="black" />
                                </svg>
                            </span>
                            <small className='font-[Poppins] font-normal text-[16px] leading-[150%] tracking-[0%] text-black/60'>
                                Remove Comment
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentSection
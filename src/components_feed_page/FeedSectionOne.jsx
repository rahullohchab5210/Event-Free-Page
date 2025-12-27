import React from 'react'
import smileImg from '../../public/assets/images/smile_person.png'
import cardoneImg from '../../public/assets/images/feedcardone.png'
import cardtwoImg from '../../public/assets/images/feedcardtwo.png'


function FeedSectionOne() {
    return (
        <>
            <div className='mb-19.75'>
                <div className='max-w-330 mx-auto px-3'>
                    <div className='flex flex-row flex-wrap -mx-3 mt-41.75 '>
                        <div className='flex flex-row max-lg:flex-col gap-15.5 px-3 '>
                            <div className='max-lg:items-center max-lg:justify-center max-lg:flex'>
                                <img src={smileImg} alt="image" className='w-100.25 h-full max-lg:px-2' />
                            </div>
                            <div className='flex flex-col max-lg:px-2'>
                                <span className="  text-black/60 [font-poppins] font-normal text-[16px] leading-[150%] tracking-[0] ">{`Home > Feed`}</span>
                                <h3 className=' text-black font-[poppins] font-semibold text-[48px] leading-[150%] tracking-[0] pt-3 pb-4'>
                                    Jhone Doe
                                </h3>
                                <p className='max-lg:max-w-full max-w-215.5 text-black/60 font-[Poppins] font-normal text-[16px] leading-[150%] tracking-[0]'>
                                    Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.
                                </p>
                                <small className='pt-7.25 pb-4.25 text-black/60 font-[poppins] font-semibold text-[16px] leading-[150%] tracking-[0] '>Following Events :</small>
                                <div className='flex gap-5 max-[1170px]:flex-col min-[735px]:flex-row max-[740px]:w-full '>
                                    <div className='flex flex-row max-[540px]:flex-col gap-5'>
                                        <article className='card py-3.25 pl-3.25 pr-4.75 shadow-lg rounded-[20px] hover:shadow-2xl'>
                                            <div className='flex flex-row items-center gap-3.25'>
                                                <img src={cardoneImg} alt="cardimage" className='w-28.5 h-28' />
                                                <div className='flex flex-col gap-1.25'>
                                                    <h4 className='font-["Poppins",sans-serif] font-bold text-[16px] leading-[100%] tracking-[0] text-black'>Augue etiam</h4>
                                                    <p className='max-[735px]:max-w-full max-w-40.75 font-["Poppins",sans-serif] font-normal text-[12px] leading-[100%] tracking-[0] text-[#666666]'>Quis et id urna sagittis. Enim lacus, felis, libero sed nisl vitae blandit sociis.</p>
                                                </div>
                                            </div>
                                        </article>
                                        <article className='card py-3.25 pl-3.25 pr-4.75 shadow-lg rounded-[20px] hover:shadow-2xl' >
                                            <div className='flex flex-row items-center gap-3.25'>
                                                <img src={cardtwoImg} alt="cardimage" className='w-28.5 h-28 rounded-[20px]' />
                                                <div className='flex flex-col gap-1.25'>
                                                    <h4 className='font-["Poppins",sans-serif] font-bold text-[16px] leading-[100%] tracking-[0] text-black'>Augue etiam</h4>
                                                    <p className='max-[735px]:max-w-full max-w-40.75 font-["Poppins",sans-serif] font-normal text-[12px] leading-[100%] tracking-[0] text-[#666666]'>Quis et id urna sagittis. Enim lacus, felis, libero sed nisl vitae blandit sociis.</p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <button className='flex flex-col pl-13.75 pr-13.75 pt-7.5 pb-7.5  bg-[rgba(44,73,254,0.1)] rounded-[20px] items-center justify-center hover:shadow-lg cursor-pointer'>
                                        <span className='text-black/60 font-[Poppins] font-semibold text-[36px] leading-[150%] tracking-[0]'>+15</span>
                                        <span className='text-black/60 font-[Poppins] font-normal text-[16px] leading-[150%] tracking-[0]'>more</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeedSectionOne
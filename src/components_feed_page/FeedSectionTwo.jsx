import React from 'react'
import shortlineImg from '../../public/assets/images/short-line.png'
import ImagesSection from './ImagesSection';

function FeedSectionTwo() {
    return (
        <div className='max-w-330 mx-auto px-3 w-full'>
            <div className='mb-7.5'>
                <span className="relative font-[Poppins] font-semibold text-5xl leading-[150%] tracking-[0%] text-black">
                    New Posts
                    <img src={shortlineImg} alt="line-image" className="absolute -top-2 left-0  h-auto" />
                </span>
            </div>
            <div className='pt-7.75 pl-8.5 pr-8.5 pb-8.75 shadow-[0px_8px_35px_rgba(0,0,0,0.1)] bg-white rounded-[30px]'>
                <ImagesSection
                    img={'./assets/images/girl_ellipse_one.png'}
                    name={'Username'}
                    event_name={'Post event name'}
                    title={'Fusce adipiscing nunc et tellus eu, tristique sodales sit aliquet.'}
                    img_one={'./assets/images/partyone.png'}
                    img_two={'./assets/images/partytwo.png'}
                    img_three={'./assets/images/partythree.png'}
                    img_four={'./assets/images/partyfour.png'}
                    paragraph_one={'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'}
                    paragraph_two={'Sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'}
                     
                />
            </div>
        </div>
    )
}

export default FeedSectionTwo
import React, { useState } from 'react'
import veryshortlineImg from '../../public/assets/images/very_short_line.png'
import CommentSection from '../components_feed_page/CommentSection';

function Tell_Us_Section() {

    const [Comment_Data, setComment_Data] = useState([
        {
            img: "./assets/images/girl_ellipse_two.png",
            comment: 'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'
        },
        {
            img: "./assets/images/girl_ellipse_three.png",
            comment: 'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.'
        },
        {
            img: "./assets/images/girl_ellipse_four.png",
            comment: 'Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'
        },
        {
            img: "./assets/images/girl_ellipse_five.png",
            comment: 'Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'
        },
        {
            img: "./assets/images/girl_ellipse_six.png",
            comment: 'Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'
        },
        {
            img: "./assets/images/girl_ellipse_seven.png",
            comment: 'Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'
        },
        {
            img: "./assets/images/girl_ellipse_eight.png",
            comment: 'Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'
        },
    ]);

    const [inputValue, setInputValue] = useState("");

    const handlePostComment = () => {
        if (inputValue.trim() === "") return;

        setComment_Data([
            ...Comment_Data,
            {
                img: "./assets/images/girl_ellipse_two.png",
                comment: inputValue
            }
        ]);

        setInputValue("");
    };

    const handleRemoveComment = (index) => {
        setComment_Data(Comment_Data.filter((_, i) => i !== index));
    };

    return (
        <div className='max-w-330 mx-auto px-3 '>
            <div className='flex items-center justify-center flex-col text-center pb-11.75'>
                <span className="relative font-[Poppins] font-semibold text-5xl leading-[150%] tracking-[0%] text-black">
                    Tell Us!
                    <img src={veryshortlineImg} alt="image" className="absolute -top-2 left-7.5 h-auto" />
                </span>
                <p className='max-w-179.75 text-black/60 font-[Poppins] font-normal text-[16px] leading-[150%] tracking-[0] pt-4'>
                    Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.
                </p>
            </div>
            <div className='mb-29.5'>
                <div className="relative items-center mb-8.5 max-sm:flex max-sm:flex-col max-sm:gap-4 max-sm:border max-sm:border-[#9CA1BE] max-sm:rounded-3xl max-sm:py-6">
                    <div className="absolute top-2 left-3 max-sm:static max-sm:flex max-sm:justify-center">
                        <img src="./assets/images/girl_ellipse_two.png" alt="image" className="max-sm:w-16 max-sm:h-16" />
                    </div>
                    <input
                        type="text"
                        id="task"
                        placeholder="Write your comment here..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="w-full h-17.5 border-solid border border-[#9CA1BE] rounded-[35px] pl-22 font-normal text-[20px] leading-[150%] font-[Poppins] text-black/60 focus:border-[#2C49FE] focus:outline-none max-sm:pl-4 max-sm:text-center max-sm:border-none max-[670px]:text-[18px] max-sm:text-[20px]"
                    />
                    <div className="absolute right-1.75 top-1.75 max-sm:static max-sm:w-full max-sm:px-4">
                        <button
                            onClick={handlePostComment}
                            className="py-3.25 px-7 w-auto font-[Poppins] text-white bg-[#2C49FE] rounded-[36px] font-semibold text-[20px] leading-[150%] hover:bg-[#2c48fea2] cursor-pointer max-sm:w-full">
                            Post Comment
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-6 max-sm:gap-12.5'>
                    {Comment_Data.map((item, i) => {
                        return (
                            <div key={i} className='flex flex-row gap-5'>
                                <CommentSection
                                    img={item.img}
                                    comment={item.comment}
                                    onRemove={() => handleRemoveComment(i)}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Tell_Us_Section
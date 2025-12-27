import React, { useState } from 'react'
import CommentSection from './CommentSection';


function ImagesSection(props) {
    const [commentsOpen, setCommentsOpen] = useState(null);

    const [liked, setLiked] = useState(false);
    const likeCount = liked ? 11 : 10;

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
        <div className='max-w-330 px-3 mx-auto'>
            <div className='flex flex-row gap-14.5 max-[1024px]:flex-wrap items-center '>
                <div className='w-full min-[1024px]:w-[47%] '>
                    <div className='flex items-center gap-5.75'>
                        <img src={props.img} alt="image-1" />
                        <div className='font-[Poppins] leading-[150%] tracking-[0%]'>
                            <h4 className='text-[24px] font-semibold text-black'>{props.name}</h4>
                            <small className='font-normal text-[16px] text-black/60'>{props.event_name}</small>
                        </div>
                    </div>
                    <div className='pt-11.25'>
                        <h6 className='max-w-140.25 max-[1024px]:max-w-full font-semibold text-2xl font-[Poppins] leading-[150%] tracking-[0%] pb-2'>
                            {props.title}
                        </h6>
                        <div className='flex gap-2 items-center'>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path d="M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z" fill="black" />
                                        <path d="M5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22ZM19 8L19.001 20H5V8H19Z" fill="black" />
                                    </g>
                                </svg>
                            </span>
                            <span className='font-[Poppins] font-normal text-[16px] text-black/60'>10/02/2022</span>
                        </div>
                        <div className='max-w-138.25 max-[1024px]:max-w-full flex flex-col gap-3.25 pt-5 pb-6.5 font-[Poppins] font-normal text-[16px] text-black/60'>
                            <p>{props.paragraph_one}</p>
                            <p>{props.paragraph_two}</p>
                        </div>
                        <div className='flex gap-10'>
                            <div className='flex items-center gap-2 font-[Poppins] font-normal text-[16px] text-black/60'>
                                <span onClick={() => setLiked(!liked)}
                                    className='cursor-pointer'>
                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.5 1C3.4625 1 1 3.4625 1 6.5C1 12 7.5 17 11 18.163C14.5 17 21 12 21 6.5C21 3.4625 18.5375 1 15.5 1C13.64 1 11.995 1.9235 11 3.337C10.4928 2.6146 9.81908 2.02505 9.03577 1.61824C8.25245 1.21144 7.38265 0.999377 6.5 1Z"
                                            fill={liked ? "red" : "none"}
                                            stroke={liked ? "red" : "black"}
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span>{likeCount}</span>
                            </div>
                            <div className='flex items-center gap-2 font-[Poppins] font-normal text-[16px] text-black/60'>
                                <span
                                    onClick={() => setCommentsOpen(commentsOpen === "show" ? null : "show")}
                                    className='cursor-pointer'>
                                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.75018 8.25C5.92049 8.25 5.25018 8.92031 5.25018 9.75C5.25018 10.5797 5.92049 11.25 6.75018 11.25C7.57987 11.25 8.25018 10.5797 8.25018 9.75C8.25018 8.92031 7.57987 8.25 6.75018 8.25ZM12.0002 8.25C11.1705 8.25 10.5002 8.92031 10.5002 9.75C10.5002 10.5797 11.1705 11.25 12.0002 11.25C12.8299 11.25 13.5002 10.5797 13.5002 9.75C13.5002 8.92031 12.8299 8.25 12.0002 8.25ZM17.2502 8.25C16.4205 8.25 15.7502 8.92031 15.7502 9.75C15.7502 10.5797 16.4205 11.25 17.2502 11.25C18.0799 11.25 18.7502 10.5797 18.7502 9.75C18.7502 8.92031 18.0799 8.25 17.2502 8.25ZM12.0002 0C5.37206 0 0.000181322 4.36406 0.000181322 9.75C0.000181322 11.9812 0.932994 14.025 2.47987 15.6703C1.78143 17.5172 0.328306 19.0828 0.304869 19.1016C-0.00450618 19.4297 -0.0888812 19.9078 0.0892438 20.3203C0.267369 20.7328 0.675181 21 1.12518 21C4.00799 21 6.28143 19.7953 7.64549 18.8297C9.00018 19.2563 10.4627 19.5 12.0002 19.5C18.6283 19.5 24.0002 15.1359 24.0002 9.75C24.0002 4.36406 18.6283 0 12.0002 0ZM12.0002 17.25C10.7486 17.25 9.51112 17.0578 8.32518 16.6828L7.26112 16.3453L6.34706 16.9922C5.67674 17.4656 4.75799 17.9953 3.65174 18.3516C3.99393 17.7844 4.32674 17.1469 4.58456 16.4672L5.08143 15.15L4.11581 14.1281C3.26737 13.2234 2.25018 11.7281 2.25018 9.75C2.25018 5.61563 6.62362 2.25 12.0002 2.25C17.3767 2.25 21.7502 5.61563 21.7502 9.75C21.7502 13.8844 17.3767 17.25 12.0002 17.25Z" fill="black" />
                                    </svg>
                                </span>
                                <span>{Comment_Data.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full min-[1024px]:w-[53%]'>
                    <div className='flex flex-row gap-7'>
                        <div className='flex flex-col items-center gap-7.25 max-[1024px]:w-full '>
                            <img src={props.img_one} alt="image-one" className='w-full' />
                            <img src={props.img_two} alt="image-two" className='w-full' />
                        </div>
                        <div className='flex flex-col items-center gap-7.5 max-[1024px]:w-full'>
                            <img src={props.img_three} alt="image-one" className='w-full' />
                            <div className='relative max-[1024px]:w-full'>
                                <img src={props.img_four} alt="image-two" className='w-full' />
                                <div className='absolute right-2.25 bottom-2.75 max-[370px]:right-0.75 max-[370px]:bottom-1.25'>
                                    <button className=' flex flex-col px-5 py-2.75 bg-[#FFFFFF] rounded-[20px] items-center justify-center cursor-pointer max-sm:py-1 max-sm:px-3 max-[480px]:rounded-[15px]'>
                                        <span className='text-black/60 font-[Poppins] font-semibold text-[36px] leading-[150%] tracking-[0] max-[480px]:text-[25px] max-[480px]:leading-[90%] max-[370px]:text-[20px]'>+15</span>                                       <span className='text-black/60 font-[Poppins] font-normal text-[16px] leading-[150%] tracking-[0] max-[370px]:text-[10px]'>more</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-5.75 pb-6.5 text-black/20'>
                <span>
                    <svg width="100%" height="1" viewBox="0 0 1251 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line opacity="0.2" x1="0" y1="0.5" x2="1251" y2="0.5" stroke="black" />
                    </svg>
                </span>
            </div>
            <div className={`${commentsOpen === "show" ? "block" : "hidden"} flex flex-col`}>
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
                        className="w-full h-17.5 border-solid border border-[#9CA1BE] rounded-[35px] pl-22 font-normal text-[20px] leading-[150%] font-[Poppins] text-black/60 focus:border-[#2C49FE] focus:outline-none max-sm:pl-4 max-sm:text-center max-sm:border-none max-[670px]:text-[18px] max-[640px]:text-[20px] max-[400px]:text-[14px]"
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
                        return <div key={i} className='flex flex-row gap-5'>
                            <CommentSection
                                img={item.img}
                                comment={item.comment}
                                onRemove={() => handleRemoveComment(i)}
                            />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ImagesSection
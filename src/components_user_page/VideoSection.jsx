import React from 'react'

function VideoSection() {
    return (
        <>
            <div className='mb-13.75 mt-33.5 max-md:mt-20'>
                <div className='max-w-330 mx-auto px-3 w-full'>
                    <div className='flex flex-row -mx-3 max-lg:flex-col px-3 gap-14.75 items-center'>
                        <div className='flex flex-col gap-5.5 w-6/12 max-lg:w-full'>
                            <span><svg width="118" height="98" viewBox="0 0 118 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50.9833 6.10352e-05C30.0734 1.46936 0.0165176 4.80778 0 45.7589V97.2826H46.6596V42.156H31.1663C30.1849 27.4361 42.3059 23.6353 55.4869 20.7176L50.9833 6.10352e-05ZM113.496 6.10352e-05C92.5861 1.46936 62.5293 4.80798 62.5129 45.7589V97.2826H109.173V42.156H93.6793C92.6978 27.436 104.819 23.6352 118 20.7175L113.496 6.10352e-05Z" fill="#2C49FE" />
                            </svg>
                            </span>
                            <p className='max-lg:max-w-full max-w-160.5 font-[Poppins] font-normal leading-[180%] tracking-[0%] text-black/60'>
                                Semper faucibus suscipit ultricies eleifend semper sit tellus gravida pretium. Cras cursus ut semper eleifend tortor lectus tristique turpis. Laoreet amet ultrices est lectus accumsan nibh cursus nunc.
                                Faucibus orci, neque, pretium, massa volutpat convallis nisl pellentesque. Gravida in ultrices vitae tortor. Dignissim viverra volutpat neque gravida aliquet urna faucibus viverra vulputate. nibh cursus nunc.
                                Faucibus orci, neque, pretium, massa volutpat convallis nisl pellentesque. Gravida in ultrices vitae tortor. Dignissim viverra volutpat neque gravida aliquet urna faucibus viverra vulputate.
                            </p>
                        </div>
                        <div className='w-6/12  max-lg:w-full'>
                            <iframe className='rounded-[30px]' width="100%" height="415"
                                src="https://www.youtube.com/embed/BRW2qLi9YDM?si=R0sYWn8Ata7Sctzd" title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoSection
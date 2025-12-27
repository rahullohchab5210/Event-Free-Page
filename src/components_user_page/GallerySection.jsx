import React from 'react'
import veryshortlineImg from '../../public/assets/images/very_short_line.png'

function GallerySection() {
    return (
        <>
            <div className='mb-16.75'>
                <div className='max-w-330 mx-auto px-3 '>
                    <div className='flex flex-col items-center gap-19.25 max-md:gap-3'>
                        <div className='flex '>
                            <span className=" relative font-[Poppins] font-semibold text-5xl leading-[150%] tracking-[0%] text-black">
                                Gallery
                                <img src={veryshortlineImg} alt="" className="absolute -top-2 left-7.5 h-auto" />
                            </span>
                        </div>
                        <div class="grid grid-cols-3 grid-rows-3 md:gap-6 sm:gap-4 gap-2 w-full">
                            <div class="col-start-1 col-end-2 row-start-1 row-end-2">
                                <img class="object-cover h-full w-full md:rounded-[30px] sm:rounded-[20px] rounded-[10px]" alt="/assets/gallery-img-1-C1-GeMmM.png" src="./assets/images/partytwo.png" />
                            </div>
                            <div class="col-start-2 col-end-3 row-start-1 row-end-2">
                                <img class="object-cover h-full w-full md:rounded-[30px] sm:rounded-[20px] rounded-[10px]" alt="/assets/gallery-img-2-jRhzd-40.png" src="./assets/images/partythree.png" />
                            </div>
                            <div class="col-start-3 col-end-4 row-start-1 row-end-3">
                                <img class="object-cover h-full w-full md:rounded-[30px] sm:rounded-[20px] rounded-[10px]" alt="/assets/gallery-img-3-B582hDwm.png" src="./assets/images/grid_imagethree.png" />
                            </div>
                            <div class="col-start-1 col-end-3 row-start-2 row-end-3">
                                <img class="object-cover h-full w-full md:rounded-[30px] sm:rounded-[20px] rounded-[10px]" alt="/assets/gallery-img-4-Bf5vsd4i.png" src="./assets/images/grid_imagefour.png" />
                            </div>
                            <div class="col-start-1 col-end-2 row-start-3 row-end-4">
                                <img class="object-cover h-full w-full md:rounded-[30px] sm:rounded-[20px] rounded-[10px]" alt="/assets/gallery-img-5-Dn_Imdd2.png" src="./assets/images/grid_imagefive.png" />
                            </div>
                            <div class="col-start-2 col-end-4 row-start-3 row-end-4">
                                <img class="object-cover h-full w-full md:rounded-[30px] sm:rounded-[20px] rounded-[10px]" alt="/assets/gallery-img-6-DjHW-IX7.png" src="./assets/images/grid_imagesix.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GallerySection
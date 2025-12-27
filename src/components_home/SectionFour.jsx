import React from 'react'
import shortlineImg from '../../public/assets/images/short-line.png'
import ExploreCard from '../elements_home/ExploreCard';
import JoinForm from '../Form/Form';


function SectionFour() {

    const Explore = [
        {
            date: "09/23/2021",
            title: "Lorem ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ",
            img: "./assets/images/cardone.png"
        },
        {
            date: "09/23/2021",
            title: "Lorem ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ",
            img: "./assets/images/cardone.png"
        },
    ];

    return (
        <div className='max-w-330 mx-auto px-3'>
            <div className='md:mt-30.25 mb-40.75 max-md:mb-10 mt-10'>
                <div className='flex flex-row flex-wrap -mx-3 items-center '>
                    <div className='w-full lg:w-[50%] px-3'>
                        <h2 className='max-lg:text-center max-lg:max-w-full font-[Poppins]  max-w-84.5 text-[#000000] font-bold text-5xl leading-[137%] tracking-[0%]'><span className="relative ">
                            Explore
                            <img src={shortlineImg} alt="" className="absolute top-0 left-0 w-full h-auto" />
                        </span> our latest events
                        </h2>
                        <p className='max-lg:text-center max-lg:max-w-full pt-3 pb-3.75 font-[Poppins] max-w-135.75 text-black/70 font-normal text-[16px] leading-[100%] tracking-[0%]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu.
                        </p>
                        <button className='max-lg:text-center max-lg:w-full  font-[Poppins] text-[#000000] font-bold text-[16px] leading-[100%] tracking-[0%] cursor-pointer'>
                            LEARN MORE
                        </button>
                    </div>
                    <div className='w-full lg:w-[50%] px-3'>
                        <div className='flex flex-row flex-wrap -mx-3 gap-y-10 '>
                            {Explore.map((item, i) => {
                                return <div key={i} className='w-full sm:w-[50%] px-3' >
                                    <ExploreCard
                                        img={item.img}
                                        date={item.date}
                                        title={item.title}
                                        description={item.description}
                                    />
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-22.5'>
                <div className='flex flex-row flex-wrap -mx-3 items-center max-md:gap-20 '>
                    <div className='w-full md:w-[58.33%] px-3'>
                        <img src="./public/assets/images/join_us.png" alt="pic" className='max-lg:w-full' />
                    </div>
                    <div className='w-full md:w-[41.66%] px-3'>
                        <span className="relative font-[Poppins] font-bold text-5xl leading-[100%] tracking-[0%] text-black">
                            Join Us !
                            <img src={shortlineImg} alt="" className="absolute -top-5 left-0 w-full h-auto" />
                        </span>
                        <p className='font-[Poppins] font-normal text-[16px] leading-[100%] tracking-[0%] text-black/70 pt-1.25 pb-3.75'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue
                        </p>
                        <JoinForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFour








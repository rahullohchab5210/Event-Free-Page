import React from 'react'
import HeroSection from '../components_home/HeroSection'
import SectionTwo from '../components_home/SectionTwo'
import SectionThree from '../components_home/SectionThree'
import SectionFour from '../components_home/SectionFour'
import Footer from '../components_common/Footer'
 

function Home() {
    return (
        <>
            <HeroSection />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <Footer />
        </>
    )
}

export default Home
import React from 'react'
import User_HeroSection from '../components_user_page/User_HeroSection'
import VideoSection from '../components_user_page/VideoSection'
import GallerySection from '../components_user_page/GallerySection'
import Tell_Us_Section from '../components_user_page/Tell_Us_Section'
import Footer from '../components_common/Footer'


function UserName() {
  return (
    <>
      <User_HeroSection />
      <VideoSection />
      <GallerySection />
      <Tell_Us_Section />
      <Footer />
    </>
  )
}

export default UserName
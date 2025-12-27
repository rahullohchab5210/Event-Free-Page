import React from 'react'
import FeedSectionOne from '../components_feed_page/FeedSectionOne'
import FeedSectionTwo from '../components_feed_page/FeedSectionTwo'
import FeedSectionThree from '../components_feed_page/FeedSectionThree'
import Footer from '../components_common/Footer'


function Feed() {
  return (
    <>
      <FeedSectionOne />
      <FeedSectionTwo />
      <FeedSectionThree />
      <Footer />
    </>
  )
}

export default Feed
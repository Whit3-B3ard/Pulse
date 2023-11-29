import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  return (
    <div className='h-2/4 w-full'>
      
    <div>
      <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} autoplay={true} autoplaySpeed={3000}>
      {/* Add your carousel slides here */}
      <div className="w-full h-[50vh]">
        <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" />
      </div>
      <div className="w-full h-[50vh]">
        <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 2" />
      </div>
      <div className="w-full h-[50vh]">
        <img src="https://d11hqkyfmkvgtx.cloudfront.net/images/2023/2/6/2022_Athletics_Super_Bulldog_WeekendPHOTO_LOCKUP_1920x1080.jpg" alt="Slide 3" />
      </div>
      <div className="w-full h-[50vh]">
        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 3" />
      </div>
    </Slider>
    </div>
    </div>
  )
}


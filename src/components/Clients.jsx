import React, {useEffect, useState} from 'react'
import '../styles/Clients.scss'

import client_svg from '../assets/client_logo.svg'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
let clients_arr = [
    {
        'title': "bootstap",
        'image': client_svg,
    },
    {
        'title': "bootstap",
        'image': client_svg,
    },
    {
        'title': "bootstap",
        'image': client_svg,
    },
    {
        'title': "bootstap",
        'image': client_svg,
    },
    {
        'title': "bootstap",
        'image': client_svg,
    },
    {
        'title': "bootstap",
        'image': client_svg,
    },
    {
        'title': "bootstap",
        'image': client_svg,
    },
    {
        'title': "bootstap",
        'image': client_svg,
    },
    {
        'title': "bootstap",
        'image': client_svg,
    },
    {
        'title': "bootstap",
        'image': client_svg,
    },
    {
        'title': "bootstap",
        'image': client_svg,
    },
    {
        'title': "bootstap",
        'image': client_svg,
    },
    {
        'title': "bootstap",
        'image': client_svg,
    },
    {
        'title': "bootstap",
        'image': client_svg,
    },
    {
        'title': "bootstap",
        'image': client_svg,
    },
    {
        'title': "bootstap",
        'image': client_svg,
    },
]

const Clients = () => {
    let [settings_left, setSettings_left] = useState({
        cssEase: 'linear',
        arrows: false,
        dots: false,
        infinite: true,
        speed: 10000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplaySpeed: 1,
        autoplay: true,
        slidesPerRow: 1,
        centerMode: true,
        className: 'slider-container-collection',
        pauseOnHover: false,
        draggable: false,
        swipe: false,
      });
      let [settings_right, setSettings_right] = useState({
        cssEase: 'linear',
        arrows: false,
        dots: false,
        infinite: true,
        speed: 10000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplaySpeed: 1,
        autoplay: true,
        slidesPerRow: 1,
        centerMode: true,
        className: 'slider-container-collection',
        pauseOnHover: false,
        draggable: false,
        swipe: false,
        rtl: true,
      });
  return (
    <div className='client-section'>
        <div className='logos-section'>
            <Slider {...settings_left}>
                {clients_arr.map((item) => 
                    <div className='logos-section-elem'>
                        <img src={client_svg} />
                    </div>
                )}
                
            </Slider>
        </div>
        <div className='logos-section'>
            <Slider {...settings_right}>
                {clients_arr.map((item) => 
                    <div className='logos-section-elem'>
                        <img src={client_svg} />
                    </div>
                )}
                
            </Slider>
        </div>

        <h2 className='clients-section-title'>Clients trust us</h2>
        
        <div className='logos-section'>
            <Slider {...settings_left}>
                {clients_arr.map((item) => 
                    <div className='logos-section-elem'>
                        <img src={client_svg} />
                    </div>
                )}
                
            </Slider>
        </div>
        <div className='logos-section'>
            <Slider {...settings_right}>
                {clients_arr.map((item) => 
                    <div className='logos-section-elem'>
                        <img src={client_svg} />
                    </div>
                )}
                
            </Slider>
        </div>
    </div>
  )
}

export default Clients
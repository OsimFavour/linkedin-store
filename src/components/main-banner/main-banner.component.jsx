import React from 'react'
import { Link } from 'react-router-dom'

import BannerImg from '../../assets/left-banner-image.jpg'

import './main-banner.styles.scss'

const MainBanner = () => {
  return (
    <div className="col-lg-6">
        <div className="left-content">
            <div className="thumb">
                <div className="inner-content">
                    <h4>LinkedIn store</h4>
                    <span>Awesome store for LinkedIn</span>
                    <div className="main-border-button">
                        <Link to="/">See more!</Link>
                    </div>
                </div>
                <img src={BannerImg} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default MainBanner
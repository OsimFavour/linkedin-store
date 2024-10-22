import React from 'react'
import { Link } from 'react-router-dom'

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
                <img src='https://i.ibb.co/xjkJv5k/main-banner.png' alt=""/>
            </div>
        </div>
    </div>
  )
}

export default MainBanner